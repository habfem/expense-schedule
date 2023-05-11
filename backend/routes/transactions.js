import express from "express";
import { addIncome, updateIncome, deleteIncome, getIncomes } from "../controllers/incomeController.js";
import { addExpense, updateExpense, deleteExpense, getExpense } from "../controllers/expenseController.js";

const router = express.Router();

router.post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .put("/edit-income/:id", updateIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense)
  .put("/edit-expense/:id", updateExpense);

export default router