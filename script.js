const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.set("views", path.join(__dirname, "public"));
app.set("views engine", "ejs");




app.get("/", (req, res) => {

    res.render('user.ejs')

})

app.listen(3000, () => {
    console.log('Server Running on 3000')
})