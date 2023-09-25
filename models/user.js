import mongoose, { Schema } from 'mongoose'

export const createUser = new Schema(
  {
    username: String,
  },

  {
    timestamps: true,
  }
)

export const User = mongoose.models.User || mongoose.model('User', createUser)
