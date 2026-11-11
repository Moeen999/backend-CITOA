import express from "express"
import dotenv from "dotenv"
import connectDB from "./configs/db.js"
import userRouter from "./src/routes/user.routes.js"
dotenv.config()

const app = express()
app.use("/users", userRouter)  //todo localhost:3000/users

connectDB()

app.get("/", (req, res) => {
  res.send("Hello, World!")
})
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})