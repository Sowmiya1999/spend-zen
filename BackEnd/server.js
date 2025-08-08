import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"; // package used for allowing frontend to access backend
import path from "path";
import { connectToMongoDB } from "./config/dbConnection.js";
import authRoutes from "./routes/authRoutes.js";
import { fileURLToPath } from "url";


const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

))

app.use(express.json());

connectToMongoDB()

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/expense", authRoutes);
app.use("/api/v1/income", authRoutes);
app.use("/api/v1/user", authRoutes);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`The server is listening to the port : ${port}`))

