import mongoose, { Schema } from 'mongoose'

export const createBudget = new Schema(
  {
    title: String,
    amount: Number,
  },

  {
    timestamps: true,
  }
)

export const Budget =
  mongoose.models.Budget || mongoose.model('Budget', createBudget)
