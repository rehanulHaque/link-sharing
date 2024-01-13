const route = require("express").Router();
const Url = require("../models/urlModel");
const auth = require("../middleware/auth");

route.post("/createurl", auth, async (req, res) => {
  try {
    const { fullUrl } = req.body;
    const url = await Url.create({ fullUrl, owner: res.userId });
    res.json(url);
  } catch (error) {
    res.json(error.message);
  }
});

route.delete("/deleteurl", auth, async (req, res) => {
  try {
    const url = await Url.findOneAndDelete({ _id: req.body.id, owner: res.userId });
    res.json("deleted");
  } catch (error) {
    res.json(error.message);
  }
});
route.get("/", auth, async (req, res) => {
  try {
    const urls = await Url.find({ owner: res.userId });
    res.json(urls);
  } catch (error) {
    res.json(error.message);
  }
});
route.get("/:shorturl", auth, async (req, res) => {
  try {
    const url = await Url.findOne({ _id: req.params.shorturl, owner: res.userId });
    if(!url) {
      return res.json(`url not found ${req.params.shorturl}, ${res.userId}`)
    }
    url.clicks++
    await url.save()
    res.json(url.fullUrl);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = route;
