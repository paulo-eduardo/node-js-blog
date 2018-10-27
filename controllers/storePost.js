const path = require('path')
const Post = require('../database/models/Post')

module.exports = (req, res) => {
    const { image } = req.files

    image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
        console.log(error);
        Post.create({
            ...req.body,
            image: `/posts/${image.name}`,
            author: req.session.userId
        },(error, post) => {
            console.log(error, post)
            res.redirect('/')
        })
    })
}