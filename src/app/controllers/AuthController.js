"use strict";

const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../../utils/handlePassword");
const { tokenSign } = require("../../utils/handleJwt");
const { User } = require("../models");
const {
  handleHttpErrorResponse,
  handleHttpError,
} = require("../../utils/handleError");

/**
 * Register a new user
 * @param {*} req
 * @param {*} res
 * @returns
 */
const registerController = async (req, res) => {
  try {
    const data = matchedData(req);
    const isExist = await User.findOne({ where: { email: data.email } });
    if (isExist) {
      return handleHttpErrorResponse(res, "User already exist", 400);
    }

    const password = await encrypt(data.password);
    const newUser = { ...data, password };
    const user = await User.create(newUser);
    user.set("password", undefined, { strict: false });

    return res.status(201).send({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

/**
 * Login a user
 * @param {*} req
 * @param {*} res
 */
const loginController = async (req, res) => {
  try {
    const data = matchedData(req);
    const user = await User.findOne({ where: { email: data.email } });

    if (!user) {
      return handleHttpErrorResponse(res, "Credentials are not correct", 400);
    }

    const isMatch = await compare(data.password, user.password);
    if (!isMatch) {
      return handleHttpErrorResponse(res, "Credentials are not correct", 400);
    }
    user.set("password", undefined, { strict: false });

    const dataSend = {
      token: await tokenSign(user),
      user,
    };

    return res.status(200).send({
      message: "User logged in successfully",
      data: dataSend,
    });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = { registerController, loginController };
