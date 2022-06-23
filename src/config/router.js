const express = require('express');

const UserControler = require('../components/user/controller');

const router = express.Router();

router.get('/v1/user', UserControler.findAll);

router.get('/v1/user/:id', UserControler.findById);

router.post('/v1/user', UserControler.create);

router.patch('/v1/user/:id', UserControler.updateById);

router.delete('/v1/user/:id', UserControler.deleteById);

module.exports = router;
