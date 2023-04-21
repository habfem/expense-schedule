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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
})