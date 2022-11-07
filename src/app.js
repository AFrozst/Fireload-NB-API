"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const ROUTE_URL = "/api";
const routes = require("./resources/routes");
const routesWelcome = require("./routes/index.routes");
const authRoutes = require("./routes/auth.routes");
const institutionRoutes = require("./routes/institution.routes");
const fireSectorRoutes = require("./routes/fireSector.routes");
const combustibleMaterialRoutes = require("./routes/combustibleMaterial.routes");
const reportRoutes = require("./routes/reports.routes");

class Application {
  constructor() {
    this.express = express();
    this.setUpExpress();
    this.setUproutes();
    this.setUpNotFound();
    this.setUpPort();
  }

  setUproutes() {
    this.express.use(ROUTE_URL, routesWelcome);
    this.express.use(ROUTE_URL + routes.auth.url, authRoutes);
    this.express.use(ROUTE_URL + routes.institutions.url, fireSectorRoutes);
    this.express.use(ROUTE_URL + routes.institutions.url, institutionRoutes);
    this.express.use(
      ROUTE_URL + routes.materials.url,
      combustibleMaterialRoutes
    );
    this.express.use(ROUTE_URL + routes.reports.url, reportRoutes);
  }

  setUpExpress() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cors());
    this.express.use(express.static(path.join(__dirname, "storage")));
  }

  setUpPort() {
    this.express.set("port", process.env.PORT || 5000);
  }

  setUpNotFound() {
    this.express.use((req, res, next) => {
      const error = new Error("Ruta no encontrada");
      error.status = 404;
      next(error);
    });
  }
}

module.exports = new Application().express;
