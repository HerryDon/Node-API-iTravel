const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const townRoute = require("./routes/townRoute");

const app = express();
app.use(cors()); //For allowing different IPs
app.use(express.json());

const port = 5000;
const db =
  "mongodb+srv://donherry:Donherry001.@cluster0.qeneomc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

//conecting to database
mongoose
  .connect(db, { useNewUrlparser: true, useUnifiedTopology: true })
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
