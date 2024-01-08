const swaggerJSDoc = require('swagger-jsdoc');

// swagger specification
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CONNECT BACKEND',
      version: '1.0.0',
      description: '',
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;