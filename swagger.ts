import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Evenementen API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.ts"],
};

const swaggerSpec = swaggerJsDoc(options);

export default (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
