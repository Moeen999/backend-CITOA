// !dotenv is not installed by default in nodejs so we need to install it first and then import it to use the .env file
//  for it i need to 
import dotenv from "dotenv";
dotenv.config();


// ! mongoDB connection without mongoose but using the module js


import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/taskmgmt";

// ! now we can create connnection

export const connectDB = async () => {
    
await MongoClient.connect(URI)
  .then((client) => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
}
