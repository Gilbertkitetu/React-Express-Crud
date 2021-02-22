let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Account Model
let accountSchema = require('../models/Account');

// CREATE Account
router.route('/create-account').post((req, res, next) => {
    accountSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ accounts
router.route('/').get((req, res) => {
    accountSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single account
router.route('/edit-account/:id').get((req, res) => {
    accountSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update account
router.route('/update-account/:id').put((req, res, next) => {
    accountSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Account updated successfully !')
        }
    })
})

// Delete Account
router.route('/delete-account/:id').delete((req, res, next) => {
    accountSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;