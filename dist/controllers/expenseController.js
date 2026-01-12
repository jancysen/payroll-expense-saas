"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenseStatus = exports.getAllExpenses = exports.getMyExpenses = exports.createExpense = void 0;
const Expense_1 = __importDefault(require("../models/Expense"));
// USER: CREATE EXPENSE
const createExpense = async (req, res) => {
    try {
        const { amount, category, description } = req.body;
        const expense = await Expense_1.default.create({
            userId: req.user?.userId,
            amount,
            category,
            description,
        });
        res.status(201).json({
            message: "Expense created successfully",
            expense,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create expense" });
    }
};
exports.createExpense = createExpense;
// USER: GET MY EXPENSES
const getMyExpenses = async (req, res) => {
    try {
        const expenses = await Expense_1.default.find({
            userId: req.user?.userId,
        });
        res.json(expenses);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch expenses" });
    }
};
exports.getMyExpenses = getMyExpenses;
// ADMIN: GET ALL EXPENSES
const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense_1.default.find().populate("userId", "name email");
        res.json(expenses);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to fetch expenses" });
    }
};
exports.getAllExpenses = getAllExpenses;
// ADMIN: UPDATE EXPENSE STATUS
const updateExpenseStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const expenseId = req.params.id;
        const expense = await Expense_1.default.findByIdAndUpdate(expenseId, { status }, { new: true });
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        res.json({
            message: "Expense status updated",
            expense,
        });
    }
    catch (error) {
        console.error("UPDATE ERROR:", error);
        res.status(500).json({ message: "Failed to update expense" });
    }
};
exports.updateExpenseStatus = updateExpenseStatus;
