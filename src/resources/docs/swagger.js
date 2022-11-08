const swaggerJSDoc = require("swagger-jsdoc");

// Swagger definition - Metadata info about our API
const swaggerDefinition = {
  openapi: "3.0.3",
  info: {
    title: "Fireload NB API",
    version: "1.0.0",
    description: "Documentación de la API REST de Fireload NB con Swagger",
  },
  servers: [
    {
      url: "http://localhost:5000/api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      NewUser: {
        type: "object",
        required: ["name", "lastName", "email", "password"],
        properties: {
          name: {
            type: "string",
            description: "El nombre del usuario",
            minLength: 3,
            maxLength: 50,
            format: "username",
          },
          lastName: {
            type: "string",
            description: "El apellido del usuario",
          },
          email: {
            type: "string",
            description: "El email del usuario",
            format: "email",
          },
          password: {
            type: "string",
            description: "La contraseña del usuario",
            minLength: 6,
            maxLength: 15,
            format: "password",
          },
        },
      },

      User: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
            description: "El email del usuario",
            format: "email",
          },
          password: {
            type: "string",
            description: "La contraseña del usuario",
            minLength: 6,
            maxLength: 15,
            format: "password",
          },
        },
      },

      NewInstitution: {
        type: "object",
        required: ["fullName", "location"],
        properties: {
          fullName: {
            type: "string",
            description: "El nombre completo de la institución",
          },
          location: {
            type: "string",
            description: "La dirección o ubicación de la institución",
          },
        },
      },

      Institution: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "El id de la institución",
          },
          fullName: {
            type: "string",
            description: "El nombre completo de la institución",
          },
          location: {
            type: "string",
            description: "La dirección o ubicación de la institución",
          },
          numberFireSectors: {
            type: "integer",
            description: "El número de sectores de incendio",
          },
          createdAt: {
            type: "string",
            description: "La fecha de creación de la institución",
          },
          updatedAt: {
            type: "string",
            description: "La fecha de actualización de la institución",
          },
          userId: {
            type: "integer",
            description: "El id del usuario que creó la institución",
          },
          firesectors: {
            type: "array",
            items: {
              $ref: "#/components/schemas/FireSector",
            },
          },
        },
      },

      CombustibleMaterial: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "El id del material combustible",
          },
          name: {
            type: "string",
            description: "El nombre del material combustible",
          },
          heatValue: {
            type: "number",
            description:
              "El valor calorífico del material combustible en Mcal/kg",
          },
          heatValue2: {
            type: "number",
            description: "El valor calorífico del material combustible MJ/kg",
          },
        },
      },

      NewFireSector: {
        type: "object",
        required: ["name", "area", "Ra"],
        properties: {
          name: {
            type: "string",
            description: "El nombre del sector de incendio",
          },
          location: {
            type: "string",
            description: "Ubicación del sector de incendio",
          },
          area: {
            type: "number",
            description: "El área del sector de incendio en m2",
          },
          environmentDescription: {
            type: "string",
            description: "La descripción del entorno del sector de incendio",
          },
          activity: {
            type: "string",
            description: "La actividad del sector de incendio",
          },
          typeFurniture: {
            type: "string",
            description: "El tipo de mobiliario del sector de incendio",
          },
          occupation: {
            type: "string",
            description: "La ocupación del sector de incendio",
          },
          observations: {
            type: "string",
            description: "Las observaciones del sector de incendio",
          },
          Ra: {
            type: "number",
            description: "El valor de Ra del sector de incendio",
          },
        },
      },

      FireSector: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "El id del sector de incendio",
          },
          name: {
            type: "string",
            description: "El nombre del sector de incendio",
          },
          location: {
            type: "string",
            description: "Ubicación del sector de incendio",
          },
          area: {
            type: "number",
            description: "El área del sector de incendio en m2",
          },
          environmentDescription: {
            type: "string",
            description: "La descripción del entorno del sector de incendio",
          },
          activity: {
            type: "string",
            description: "La actividad del sector de incendio",
          },
          typeFurniture: {
            type: "string",
            description: "El tipo de mobiliario del sector de incendio",
          },
          occupation: {
            type: "string",
            description: "La ocupación del sector de incendio",
          },
          observations: {
            type: "string",
            description: "Las observaciones del sector de incendio",
          },
          numberMaterials: {
            type: "integer",
            description:
              "El número de materiales combustibles del sector de incendio",
          },
          Ra: {
            type: "number",
            description: "El valor de Ra del sector de incendio",
          },
          fireload: {
            type: "number",
            description: "La carga de fuego ponderada del sector de incendio",
          },
          intrinsicLevel: {
            type: "number",
            description: "El nivel intrínseco del sector de incendio",
          },
          createdAt: {
            type: "string",
            description: "La fecha de creación del sector de incendio",
          },
          updatedAt: {
            type: "string",
            description: "La fecha de actualización del sector de incendio",
          },
          institutionId: {
            type: "integer",
            description: "El id de la institución del sector de incendio",
          },
          institution: {
            $ref: "#/components/schemas/Institution",
          },
        },
      },

      FireSectorWithMaterials: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "El id del sector de incendio",
          },
          name: {
            type: "string",
            description: "El nombre del sector de incendio",
          },
          location: {
            type: "string",
            description: "Ubicación del sector de incendio",
          },
          area: {
            type: "number",
            description: "El área del sector de incendio en m2",
          },
          environmentDescription: {
            type: "string",
            description: "La descripción del entorno del sector de incendio",
          },
          activity: {
            type: "string",
            description: "La actividad del sector de incendio",
          },
          typeFurniture: {
            type: "string",
            description: "El tipo de mobiliario del sector de incendio",
          },
          occupation: {
            type: "string",
            description: "La ocupación del sector de incendio",
          },
          observations: {
            type: "string",
            description: "Las observaciones del sector de incendio",
          },
          numberMaterials: {
            type: "integer",
            description:
              "El número de materiales combustibles del sector de incendio",
          },
          Ra: {
            type: "number",
            description: "El valor de Ra del sector de incendio",
          },
          fireload: {
            type: "number",
            description: "La carga de fuego ponderada del sector de incendio",
          },
          intrinsicLevel: {
            type: "number",
            description: "El nivel intrínseco del sector de incendio",
          },
          createdAt: {
            type: "string",
            description: "La fecha de creación del sector de incendio",
          },
          updatedAt: {
            type: "string",
            description: "La fecha de actualización del sector de incendio",
          },
          institutionId: {
            type: "integer",
            description: "El id de la institución del sector de incendio",
          },
          materials: {
            name: "material",
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                  description: "El id del material combustible",
                },
                name: {
                  type: "string",
                  description: "El nombre del material combustible",
                },
                heatValue: {
                  type: "number",
                  description:
                    "El valor calorífico del material combustible en Mcal/kg",
                },
                heatValue2: {
                  type: "number",
                  description:
                    "El valor calorífico del material combustible MJ/kg",
                },
                Sector_Material: {
                  type: "object",
                  properties: {
                    id: {
                      type: "integer",
                      description:
                        "El id de la relación material y sector de incendio",
                    },
                    weight: {
                      type: "number",
                      description:
                        "El peso del material del sector de incendio",
                    },
                    ci: {
                      type: "number",
                      description:
                        "El valor de ci del material del sector de incendio",
                    },
                    total: {
                      type: "number",
                      description:
                        "El valor total del material en el sector de incendio",
                    },
                    materialId: {
                      type: "integer",
                      description: "El id del material del sector de incendio",
                    },
                    sectorId: {
                      type: "integer",
                      description: "El id del sector de incendio",
                    },
                  },
                },
              },
            },
          },
        },
      },

      Report: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "El mensaje del reporte",
          },
          filename: {
            type: "string",
            description: "El nombre del archivo del reporte",
          },
          url_filename: {
            type: "string",
            description: "La url del archivo del reporte",
          },
          url_pathFilename: {
            type: "string",
            description: "La url del archivo del reporte sin dominio",
          },
        },
      },
    },
  },
};

// Options for the swagger docs
const swaggerOptions = {
  swaggerDefinition,
  apis: ["./src/routes/*.js"],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
