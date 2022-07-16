const mongoose = require("mongoose");
const { SCHEMA } = require("../helpers/constants.js");
const Schema = mongoose.Schema;

const reminderSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: { type: String, trim: true, required: true },
    data: {
      to: { type: String, trim: true, required: true },
      subject: { type: String, required: true },
      body: { type: String, required: true },
    },
    time: { type: Date, required: true },
    status: {
      type: String,
      enum: [SCHEMA.REMINDER_STATUS.UPCOMING, SCHEMA.REMINDER_STATUS.SEND],
      trim: true,
      default: SCHEMA.STATUS.UPCOMING,
    },
  },
  { timestamps: true }
);

module.exports = User;
