const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const TaskSchema = new mongoose.Schema({
//Possui titulo
title: {
    type: String,
    required: true,
},
// Referencia um projeto
project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true,
},
// Atribuida a 
assignedTo: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User',
require: true,
},
completed: {
    type: Boolean,
    require: true,
    defaut: false,
},

createdAt: {
    type: Date,
    default: Date.now
},
});


const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;