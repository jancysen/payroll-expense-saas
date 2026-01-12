import express from "express";
import {
  createExpense,
  getMyExpenses,
  getAllExpenses,
  updateExpenseStatus,
} from "../controllers/expenseController";
import { protect } from "../middleware/authMiddleware";
import { adminOnly } from "../middleware/adminMiddleware";

const router = express.Router();

// USER ROUTES
router.post("/expenses", protect, createExpense);
router.get("/expenses", protect, getMyExpenses);

// ADMIN ROUTES
router.get("/admin/expenses", protect, adminOnly, getAllExpenses);
router.put("/admin/expenses/:id", protect, adminOnly, updateExpenseStatus);

export default router;
