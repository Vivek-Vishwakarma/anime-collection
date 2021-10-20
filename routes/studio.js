const express = require("express")
const router = express.Router()
const Studio = require("../models/studioModel")
//all studio
router.get('/', (req, res) => {
    res.render("studio/index")
})
//new studio
router.get('/new', (req, res) => {
    res.render("studio/new", { studio: new Studio() })
})
//create new studio
router.post('/', async (req, res) => {
    const studio = new Studio({
        name: req.body.name
    })
    try {
        const newStudio = await studio.save()
        res.redirect("studio")
    } catch {
        res.render("studio/new", {
            studio: studio,
            error: "Error creating studio"
        })
    }

    // studio.save((err,newStudio) => {
    //     if(err){
    //         res.render("studio/new",{
    //             studio : studio,
    //             error : "Error creating studio"
    //         })
    //     }
    //     else{
    //         res.redirect("/studio")
    //     }
    // })
})

module.exports = router