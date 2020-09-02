const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.model');

// create :
router.get('/create', function (req, res) {
    res.render('addoredit', { viewTitle: 'Create:' });
});

router.post('/create', function (req, res) {
    const employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((e) => {
        if (e) throw e;
        res.redirect('/employee/list');
    });
});

// read :
router.get('/list', function (req, res) {
    Employee.find((err, docs) => {
        if (err) throw err;
        res.render('list', { list: docs });
    });
});

// update :
router.get('/update/:id', (req, res) => {
    Employee.findById(req.params.id, (err, docs) => {
        if (err) throw err;
        res.render('update', { employee: docs });
    })
});

router.post('/update', (req, res) => {
    Employee.findByIdAndUpdate(req.body._id, req.body, (err) => {
        if (err) throw err;
        res.redirect('/employee/list');
    });
});

// delete :
router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err) => {
        if (err) throw err;
        res.redirect('/employee/list');
    });
})

module.exports = router;