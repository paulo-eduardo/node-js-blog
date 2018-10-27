const mongoose = require('mongoose')

const Post = require('./database/models/Post')


mongoose.connect('mongodb://localhost/node-js-test-blog', {
    useNewUrlParser: true
})

// Post.create({
//     title: 'My first blog post',
//     description: 'Blog post description',
//     content: 'Lorem ipsum content'
// }, (error, post) => {
//     console.log(error, post)
// })

// Post.find({
//     title: 'My first blog post'
// }, (error, posts) => {
//     console.log(error, posts)
// })

// Post.findById("5bd26726750a14181183c384", (error, post) => { console.log(error, post)})

Post.findByIdAndUpdate("5bd26726750a14181183c384", {
    title: 'My first blog post title updated'
}, (error, posts) => {
    console.log(error, posts)
})