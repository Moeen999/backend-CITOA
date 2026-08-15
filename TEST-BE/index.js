// ! Now this is how we create the server in Express.js

import express from 'express';

const app = express();

app.get("/koi-aur",(req,res)=>{
    res.send("Hello Nigga!")
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});