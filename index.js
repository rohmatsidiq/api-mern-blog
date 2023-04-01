const express = require("express");

const app = express();

// membuat sebuah perintah
app.use(() => {
  console.log("Hello Server");
  console.log("Hello lagi")
});

// membuat membuat server saay berjalan dimana
app.listen(4000);
