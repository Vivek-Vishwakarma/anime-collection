const express = require("express");
const router = express.Router();
const Anime = require("../models/animeModel");
const Studio = require("../models/studioModel");

//all anime
router.get("/", async (req, res) => {
  res.send("All Anime")
});
//new anime
router.get("/new", async (req, res) => {
  try {
    const studio = await Studio.find({})
    const anime = new Anime()
    res.render("anime/new", {
      studios : studio,
      anime : anime
    })
  } catch { 
    res.redirect("/anime")
  }
});
//create new anime
router.post("/", async (req, res) => {
  const anime = new Anime({
    title : req.body.title,
    desc : req.body.desc,
    studio : req.body.studio,
    releaseDate : new Date(req.body.releaseDate),
    epCount : req.body.epCount
  })
  try {
    const newAnime = await anime.save()
    res.redirect("/anime")
  } catch {
    const studio = await Studio.find({})
    res.render("anime/new", {
      studios: studio,
      anime : anime
    });
  }
});

// async function newPage(res, anime, hasError = false){
//   try {
//     const studio = await Studio.find({})
//     // const anime = new Anime()
//     const params = {
//       studios : studio,
//       anime : anime
//     }
//     if(hasError) params.error = "Error creating anime"
//     res.render("anime/new", params)
//   } catch { 
//     res.redirect("anime")
//   }
// }

module.exports = router;
