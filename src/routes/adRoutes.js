const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Ad = mongoose.model("Ad");

const router = express.Router();

//from this point the user has to be logged in
router.use(requireAuth);

router.get("/ads", async (req, res) => {
  const ads = await Ad.find({ userId: req.user._id });

  res.send(ads);
});

router.post("/ads", async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "you must provide a name and locations" });
  }

  try {
    const ad = new Ad({ name, locations, userId: req.user._id });
    await ad.save();
    res.send(ad);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
