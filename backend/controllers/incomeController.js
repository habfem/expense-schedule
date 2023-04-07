import Income from "../models/incomeModel.js"

const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body

  const income = Income({
    title,
    amount,
    category,
    description,
    date,
  })

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All field are required" })
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be positive" })
    };
    await income.save()
    res.status(200).json({ message: "Income successully added" })
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  };
  //console.log(income);
};

const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 })
    res.status(200).json(incomes)
  } catch (error) {
    res.status(500).json({ message: "Server Error" })
  };
};

const deleteIncome = async (req, res) => {
  const { id } = req.params;
  //console.log(req.params);
  Income.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income Deleted" })
    })
    .catch((err) => {
      res.status(200).json({ message: "Server Error" })
    })
};


export { addIncome, getIncomes, deleteIncome }