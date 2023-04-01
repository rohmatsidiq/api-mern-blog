const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

// buat midleware
app.use(bodyParser.json()); // karena kita menggunakan type json

// mengatasi error CORS ORIGIN
app.use((req, res, next) => {
  // diparameter kedua, tulis url yang boleh mengakses api kita
  res.setHeader("Access-Control-Allow-Origin", "*");

  // izinkan method apa saja yang boleh mengakses api kita
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  // izinkan header apa saja
  // authorization untuk oengiriman token ke api kita
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

// membuat membuat server berjalan dimana
app.listen(4000);
