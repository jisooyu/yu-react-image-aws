const express = require("express");
require("dotenv").config();

const app = express();

// body parser 대신
app.use(express.json());

// x-www-form-urlencoded를 사용하면 다음이 필요
app.use(express.urlencoded({ extended: false }));

app.use("/uploadPhoto", require("./routes/photoRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
