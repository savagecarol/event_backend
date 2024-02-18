const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');


// swagger specification
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CONNECT BACKEND',
      version: '1.0.0',
      description: 'Connecting by event',
    },
  },
  apis: ['./route/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;