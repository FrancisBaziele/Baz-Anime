const anime_filter = (req, res) => {
    //logic for filter endpoint
    res.send({ message: "The filter endpoint isn't working right now" });
};

const anime_underrated = (req, res) => {
    //logic for underrated endpoint
    res.send({ message: "The underrated endpoint isn't working right now" });
};

const anime_popular = (req, res) => {
    //logic for popular endpoint
    res.send({ message: "The popular endpoint isn't working right now" });
};

const anime_info = (req, res) => {
    //logic for info endpoint
    res.send({ message: "The info endpoint isn't working right now" });
};

const anime_home = (req, res) => {
    //logic for home endpoint
    res.send({ message: "The home endpoint isn't working right now" });
};

module.exports = {
    anime_filter,
    anime_home,
    anime_underrated,
    anime_popular,
    anime_info,
};
