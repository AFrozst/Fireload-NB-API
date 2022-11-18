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
      return handleHttpErrorResponse(
        res,
        "Ya existe un usuario con ese email",
        400
      );
    }

    const password = await encrypt(data.password);
    const newUser = { ...data, password };
    const user = await User.create(newUser);
    user.set("password", undefined, { strict: false });

    return res.status(201).send({
      message: "Usuario creado correctamente",
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
      return handleHttpErrorResponse(res, "Credenciales incorrectas", 400);
    }

    const isMatch = await compare(data.password, user.password);
    if (!isMatch) {
      return handleHttpErrorResponse(res, " Credenciales incorrectas", 400);
    }
    user.set("password", undefined, { strict: false });

    const dataSend = {
      token: await tokenSign(user),
      user,
    };

    return res.status(200).send({
      message: "Usuario inició sesión correctamente",
      data: dataSend,
    });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

/**
 * Get user data
 * @param {*} req
 * @param {*} res
 */
const getUser = async (req, res) => {
  try {
    const { user } = req;

    const userSearch = await User.findOne({
      where: {
        email: user.email,
      },
    });

    if (!userSearch) {
      return handleHttpErrorResponse(res, "Usuario no encontrado", 404);
    }

    return res.status(200).send({
      data: {
        name: userSearch.name,
        lastName: userSearch.lastName,
        email: userSearch.email,
      },
    });
  } catch (error) {
    handleHttpError(res, error.message);
  }
};

module.exports = { registerController, loginController, getUser };
