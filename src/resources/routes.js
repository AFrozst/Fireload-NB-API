"use strict";

module.exports = {
  empty: "",
  id: "/:id",
  search: "/search",
  auth: {
    url: "/auth",
    login: "/login",
    register: "/register",
    users: {
      url: "/user",
    },
  },
  institutions: {
    url: "/institutions",
    institutionId: "/:institutionId",
  },
  fireSectors: {
    url: "/fireSectors",
    fireSectorId: "/:fireSectorId",
  },
  materials: {
    url: "/materials",
    materialId: "/:materialId",
  },
  reports: {
    url: "/reports",
    types: {
      pdf: "/pdf",
    },
  },
};
