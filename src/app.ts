import express from "express";
import bodyParser from "body-parser";
import exampleRoutes from "./routes/route";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "REST API for Swagger Documentation",
      version: "1.0.0",
    },
    schemes: ["http"],
    servers: [{ url: "http://localhost:3000/" }],
  },
  apis: [
    `${__dirname}/routes/example-route.ts`,
    "./dist/routes/example-route.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCssUrl:
      "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-newspaper.css",
  })
);

app.use(bodyParser.json());

app.use(exampleRoutes);

app.listen(3000);
