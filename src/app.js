"use strict";
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const ROUTE_URL = "/api";
const routes = require("./routes/index");

class Application {
  constructor() {
    this.express = express();
    this.setUpExpress();
    this.setUproutes();
    this.setUpNotFound();
    this.setUpPort();
  }

  setUproutes() {
    this.express.use(ROUTE_URL, routes);
  }

  setUpExpress() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cors());
    //this.express.use(morgan('dev'));
  }

  setUpPort() {
    this.express.set("port", process.env.PORT || 5000);
  }

  setUpNotFound() {
    this.express.use((req, res, next) => {
      const error = new Error("Rsouce not found");
      err.status = 404;
      next(error);
    });
  }
}

module.exports = new Application().express;
