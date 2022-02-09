const mongoose = require("mongoose");

const MedicsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
      type: String,
      required: true
    },
    sickdate: {
      type: Date,
      required: true
    },
    recoverdate: {
      type: Date,
      required: true
    },
    note: {
      type: String,
      default:"No Notes"
    }
  });
  const Medics = mongoose.model("medics", MedicsSchema);
  module.exports = Medics;