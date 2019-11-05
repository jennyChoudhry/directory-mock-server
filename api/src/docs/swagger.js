import swaggerJSDoc from 'swagger-jsdoc';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

// Swagger definition
const swaggerDefinition = {
  swagger: '2.0',
  info: {
    title: 'FLIGHT PLANS MICROSERVICE API for IMS POC', // Title of the documentation
    version: '1.0.0', // Version of the app
    description: 'API Documentation',
  },
  host: 'arrivaldelay-dev-v4-97251260.us-east-1.elb.amazonaws.com',
  basePath: '/', // the basepath of your endpoint
  schemes: [ 'http' ],
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,

  // path to the API docs
  apis: [ './**/*.yml' ],
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

const file = fs.readFileSync(path.resolve(__dirname, 'flight-plans.yml'), 'utf8');
const yaml = YAML.parse(file);
export const swaggerJson = { ...swaggerDefinition, ...yaml };

export default swaggerSpec;
