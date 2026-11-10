import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/db.js"
dotenv.config()

const app = express()

connectDB()

app.get("/", (req, res) => {
  res.send("Hello, World!")
})
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})