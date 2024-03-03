const express = require("express");
const cors = require("cors");
require('dotenv').config()
const db = require("./database/index");
const usersbfRoute = require("./routes/usersbf.routes");




const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors())





app.use("/nour2",usersbfRoute)



app.listen(port, () => {
  console.log(`Connected on port ${port}`);
}); 


