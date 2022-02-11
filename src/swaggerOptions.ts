import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tasks API',
      version: '1.0.0',
      description: 'A simple express library API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
      {
        url: 'https://api-task-swagger.herokuapp.com',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};
