import express from "express";
import { addIncome, deleteIncome, getIncomes } from "../controllers/incomeController.js";
import { addExpense, deleteExpense, getExpense } from "../controllers/expenseController.js";

const router = express.Router();

router.post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

export default router