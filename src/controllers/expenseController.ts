import { Request, Response } from "express";
import Expense from "../models/Expense";

interface AuthRequest extends Request {
  user?: {
    userId: string;
    role: string;
  };
}

// USER: CREATE EXPENSE
export const createExpense = async (req: AuthRequest, res: Response) => {
  try {
    const { amount, category, description } = req.body;

    const expense = await Expense.create({
      userId: req.user?.userId,
      amount,
      category,
      description,
    });

    res.status(201).json({
      message: "Expense created successfully",
      expense,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create expense" });
  }
};

// USER: GET MY EXPENSES
export const getMyExpenses = async (req: AuthRequest, res: Response) => {
  try {
    const expenses = await Expense.find({
      userId: req.user?.userId,
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses" });
  }
};

// ADMIN: GET ALL EXPENSES
export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find().populate("userId", "name email");
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch expenses" });
  }
};

// ADMIN: UPDATE EXPENSE STATUS
export const updateExpenseStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const expenseId = req.params.id;

    const expense = await Expense.findByIdAndUpdate(
      expenseId,
      { status },
      { new: true }
    );

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({
      message: "Expense status updated",
      expense,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({ message: "Failed to update expense" });
  }
};
