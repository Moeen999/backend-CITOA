// // !dotenv is not installed by default in nodejs so we need to install it first and then import it to use the .env file
// //  for it i need to 
// import dotenv from "dotenv";
// dotenv.config();


// // ! mongoDB connection without mongoose but using the module js


// import { MongoClient } from "mongodb";

// // const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/taskmgmt";
// const URI = process.env.MONGODB_URI;
// const client = new MongoClient(URI);

// // ! now we can create connnection

// export const connectDB = async () => {
    
// await MongoClient.connect(URI)
//   .then((client) => {
//     console.log("MongoDB connected successfully!");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });
// const db = MongoClient.db("task-mgmt");
//   return db;
  
// }





import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const connectDB = async () => {
  try {
    await client.connect();

    console.log("MongoDB connected successfully!");

    const db = client.db("taskmgmt");

    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};


const db = await connectDB();

const tasksCollection = db.collection("tasks");

console.log("Collection ready!");