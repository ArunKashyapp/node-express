require('dotenv').config()
const express = require('express')

// import express from "express";
const app = express()
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get( '/login',(req , res) => {
    res.send("This is the login page")
})

app.get( '/signUp',(req , res) => {
    res.send("This is the signup page")
})

app.get( '/home',(req , res) => {
    res.send("This is the home page")
})

app.get( '/html',(req , res) => {
    res.send("<h1>Arun Kashyap</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})