import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./db/db.js";
//import readdirSync from "fs";
import transctionsRoute from "./routes/transactions.js"

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors()); //for domain you want it to be in

//routes
app.use("/api/v1", transctionsRoute)

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
  console.log(`Server Running on port: ${PORT}`)
})