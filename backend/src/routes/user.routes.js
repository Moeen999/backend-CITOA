import express from "express";

const userRouter = express.Router();


userRouter.get("/register", (req, res) => {
  res.send("<h1>User Registration</h1>");
});

export default userRouter;