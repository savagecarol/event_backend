const express = require('express');
require('dotenv').config(); // urls , port , redis config , variables that can be use in whole project

// making object of express
const app = express();

//port
const PORT = process.env.PORT;

// middleware
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });


app.listen(PORT , () => {
    console.log(`Server is up on port ${PORT}.`);
})
