const express = require("express");
const bodyParser = require("body-parser")
const bcrypt = require("bcrypt-nodejs")
const cors = require("cors")
const knex = require("knex")

const signup = require("./controllers/signup")
const signin = require("./controllers/signin")
const profile = require("./controllers/profile")
const image = require("./controllers/image")

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'darklord',
        database: 'smart-brain'
    }
});

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => { res.send(database.users) })
app.post("/signin", signin.handleSignin(db, bcrypt))
app.post("/signup", (req, res) => { signup.handleRegister(req, res, db, bcrypt) })
app.get("/profile/:id", (req, res) => { profile.handleProfileGet(req, res, db) })
app.put("/image", (req, res) => { image.handleImageCount(req, res, db) })
app.post("/imageurl", (req, res) => { image.handleApiCall(req, res) })

app.listen(3000, () => {
    console.log("app is working on port 3000")
})


// end points can be typed in a different way but give the same result ,i will apply this special way on one of the endpoints 