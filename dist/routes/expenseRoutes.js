"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expenseController_1 = require("../controllers/expenseController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const adminMiddleware_1 = require("../middleware/adminMiddleware");
const router = express_1.default.Router();
// USER ROUTES
router.post("/expenses", authMiddleware_1.protect, expenseController_1.createExpense);
router.get("/expenses", authMiddleware_1.protect, expenseController_1.getMyExpenses);
// ADMIN ROUTES
router.get("/admin/expenses", authMiddleware_1.protect, adminMiddleware_1.adminOnly, expenseController_1.getAllExpenses);
router.put("/admin/expenses/:id", authMiddleware_1.protect, adminMiddleware_1.adminOnly, expenseController_1.updateExpenseStatus);
exports.default = router;
