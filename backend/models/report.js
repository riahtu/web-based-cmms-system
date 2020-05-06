const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  title: String,
  asset: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
  },
  body: String,
  status: {
    type: String,
    enum: ["open", "assigned", "closed"],
  },
  open_date: Date,
  finish_date: Date,
  type: {
    type: String,
    enum: ["pm", "repair", "inspection"],
  },
  priority: [],
});

// compile schema into a model to create a class
const Report = mongoose.model("Report", reportSchema);

exports.Report = Report;
