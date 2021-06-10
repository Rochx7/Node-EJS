const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.set("views", path.join(__dirname, "public"));
app.set("views engine", "ejs");


let users = [
    {
        id: 0,
        name: 'Rocha',
        phone: '(11)40028922'
    },
    {
        id: 1,
        name: 'Rocha',
        phone: '(11)40028922'
    },
    {
        id: 2,
        name: 'Rocha',
        phone: '(11)40028922'
    }
]

app.get("/", (req, res) => {

    res.render('user.ejs', { users: users })

})

app.get("/about", (req, res) => {

    res.render('about.ejs')
})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})