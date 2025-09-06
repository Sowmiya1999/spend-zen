import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors"; // package used for allowing frontend to access backend
import path from "path";
import { connectToMongoDB } from "./src/config/dbConnection.js";
import authRoutes from "./src/routes/auth.routes.js";
import incomeRoutes from "./src/routes/income.routes.js"
import { fileURLToPath } from "url";
import expenseRoutes from "./src/routes/expense.routes.js"
import dashboardRouter from "./src/routes/dashboard.routes.js";


const app = express();

app.use(cors({
    origin:  process.env.CLIENT_URL_DEBUG || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}

))

app.use(express.json());

connectToMongoDB()

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/dashboard", dashboardRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`The server is listening to the port : ${port}`))

