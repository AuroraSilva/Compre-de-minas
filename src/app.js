require('dotenv-safe').config()
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/dbConnect')
const companiesRoutes = require("./Routes/companiesRoutes")
const index = require("./Routes/index")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect()

app.use("/", index);

app.use("/", companiesRoutes);

app.use('/compre-de-minas', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app