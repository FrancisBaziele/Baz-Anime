const express = require("express");
const animeController = require("../controller/animeController");

const Router = express.Router();

Router.get("/underrated/:page", animeController.anime_underrated);
Router.get("/filter", animeController.anime_filter);
Router.get("/home", animeController.anime_home);
Router.get("/info", animeController.anime_info);
Router.get("/popular", animeController.anime_popular);

module.exports = Router;
