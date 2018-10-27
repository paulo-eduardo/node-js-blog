const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo')

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const createUserController = require('./controllers/createUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')


const storePostMiddleware = require('./middleware/storePost')
const authMiddleware = require('./middleware/auth')

const Post = require('./database/models/Post')

//DB setup
const app = new express()

mongoose.connect('mongodb://mongodb/node-js-blog', {
    useNewUrlParser: true
})
const mongoStore = connectMongo(expressSession)

app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))




app.use(fileUpload())
app.use(express.static('public'))
app.use(expressEdge)
app.set('views', `${__dirname}/views`)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/post/store', storePostMiddleware)

app.get('/', homePageController)
app.get('/auth/register', createUserController)
app.get('/posts/new', authMiddleware, createPostController)
app.get('/post/:id', getPostController)
app.get('/auth/login', loginController)
app.post('/posts/store', authMiddleware, storePostMiddleware, storePostController)
app.post('/users/register', storeUserController)
app.post('/users/login', loginUserController)

app.listen(4000, () => {
    console.log('App listen on port 4000')
})