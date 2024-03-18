require('dotenv').config()
let express = require("express");

require("./src/database/connection")
const port = 3000;

const router = require('./src/routes/index');
//const cors = require('cors');
let app = express();
//app.use(cors());
app.use(express.json());
 app.use("/", router);


 app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running on PORT:${process.env.PORT}`);
});



