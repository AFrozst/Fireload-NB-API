const { User, Firesector } = require("../models/index");

const controller = {
  getUsers: async (req, res) => {
    const users = await User.findAll({
      include: ["roles"],
    });
    res.json(users);
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: ["roles"],
    });
    res.json(user);
  },

  getSectores: async (req, res) => {
    const sectors = await Firesector.findAll({
      include: ["materials"],
    });
    res.json(sectors);
  },

  getSectorById: async (req, res) => {
    const { id } = req.params;
    const sector = await Firesector.findByPk(id, {
      include: ["institution", "materials"],
    });
    res.json(sector);
  },
};

module.exports = controller;