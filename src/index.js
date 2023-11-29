require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const connetToDB = require('./utils/db');
const port = 3001;

app.use(express.json()); //use body-parser to parse incoming requests. this line is crucial.
app.use(helmet()); //use helmet to secure your express app
app.use(morgan('dev')); //use morgan to log requests
const v1Router = require('./routes')
app.use('/v1', v1Router);
connetToDB()
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});