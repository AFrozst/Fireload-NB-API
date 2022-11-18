const data = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "host",
    "database": process.env.DATABASE || "fireload-nb-db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres",
    "define": {
      "schema": "public",
      "timestamps": false,
    },
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres",
    "define": {
      "schema": "public",
      "timestamps": false,
    },
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false,
      },
    },
    "DATABASE_URL": process.env.DATABASE_URL,
  },
  "test": {
    "username": null,
    "password": null,
    "database": null,
    "host": null,
    "dialect": null,
    "define": {
      "schema": "public",
      "timestamps": false,
    },
  },
};

module.exports = data;
