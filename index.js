const express = require('express');
const cors = require('cors'); 
const corsOption  = require ('./utils/cors'); 
const swaggerSpec = require('./utils/swagger'); 
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const route = require('./route/route');
require('dotenv').config(); 
const firebase = require('./utils/firebase');
const app = express();

/**
 * PORT
 */
const PORT = process.env.PORT;

/**
 * MIDDLEWARE
 */

/**
 * print the apis
 */
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });

/**
 * cors
 */
app.use(cors(corsOption)); 

/**
 * json body parser
 */
app.use(bodyParser.json()); 

/**
 * Url encoded body parser
 */
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * api route
 */
app.use('/api', route); 

/**
 * starting the server
 */

app.listen(PORT , () => {
    console.log(`Server is up on port ${PORT}.`);
})
