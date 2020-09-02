const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    fullName: {
        type: 'string',
        required: true,
        trim: true,
    },
    email: {
        type: 'string',
        required: true,
        trim: true,
    },
    mobile: {
        type: 'number',
        required: true,
    },
    city: {
        type: 'string',
        required: true,
        trim: true,
    }
});

const Employee = mongoose.model('employee',EmployeeSchema);

module.exports = Employee;