"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var projectShema = new _mongoose.Schema({
  name: String,
  description: String
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Project', projectShema);

exports["default"] = _default;