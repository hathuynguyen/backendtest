const router = require("express").Router()
const Post = require("../module/post")

router.get("/post", (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    res.json(post)
})

router.post("/post", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {   
        const savedPost = await post.save();
        res.send(savedPost)
    }
    catch(error) {
        res.status(400).send(error);
    }

})

module.exports = router;