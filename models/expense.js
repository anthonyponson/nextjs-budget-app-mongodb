import mongoose, { Schema } from 'mongoose'

export const createExpense = new Schema(
  {
    title: String,
    amount: Number,
  },

  {
    timestamps: true,
  }
)

export const Expense =
  mongoose.models.Expense || mongoose.model('Expense', createExpense)
