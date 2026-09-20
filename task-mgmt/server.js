// ! Now this is how we create the server in Express.js

import express from 'express';
import { connectDB } from './configs/db.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  methods:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Content-Type", "Authorization"],
}))

const db = await connectDB();
await db.createCollection("tasks");

console.log("Collection ready!");
// createCollection()

// Respond to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Respond to POST request on the root route
// app.post('/', (req, res) => {
//   res.send('POST request to the homepage');
// });

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contact', (req, res) => {
  res.send('contact page');
});


// app.all('*', (req, res) => {
//   res.status(404).send('404 Not Found');
// }); 

// app.all('*', (req, res) => {
//   res.status(404).send('404 - Page not found');
// });



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});