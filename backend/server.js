const express = require("express");
const dotenv = require("dotenv");
const animeRouter = require("./routes/animeRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/anime", animeRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
