import express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import protectedRoutes from "./routes/protectedRoutes";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();
const PORT = 5000;

connectDB();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api", expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
