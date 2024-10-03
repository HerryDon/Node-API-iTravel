require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");// more setting of different IP's is found in cores express
const errorMiddleware = require("./middleware/errorMiddleware");


const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL

//routes
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const townRoute = require("./routes/townRoute");


const app = express();

app.use(cors()); //For allowing different IPs
app.use(express.json());

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});

//conecting to database
mongoose
  .connect(MONGO_URL, { useNewUrlparser: true, useUnifiedTopology: true })
  .then(() => console.log("db conected successfully"))
  .catch((error) => console.log(error));

//main route
app.get("/", (req, res) => {
  res.send("API is runnuing");
});


//api routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/town", townRoute);

//middleware
app.use(errorMiddleware);// In this case it must be placed under the routes api's
