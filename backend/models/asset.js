const mongoose = require("mongoose");

// schema is used to define the shape
// of documents in mongodb collection

// create instance of mongoose.Schema class
// and pass object to specify key value pairs
// in asset document
const assetSchema = new mongoose.Schema({
  name: String,
  serial_number: String,
  model: String,
  department: { type: String, enum: ["radiology", "cardiology", "operations"] },
  price: Number,
  location: String,
  supplier: String,
  condition: {
    type: String,
    enum: ["In service", "Need repair", "Scrapped", "Out of service"],
    default: "In service",
  },
  last_pm_date: Date,
  last_failure_date: Date,
  last_fix_date: Date,
  inspection_period_days: Number,
  notes: String,
  pm: {
    title: { type: String },
    instructions: { type: String },
    assigned_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    status: {
      type: String,
      enum: ["Asssined", "In progress", "Done", "Missed"],
    },
    schedules: { type: String },
  },
});

// compile schema into a model to create a class
const Asset = mongoose.model("Asset", assetSchema);

exports.Asset = Asset;
