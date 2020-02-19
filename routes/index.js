'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Coffee and Books' });
});

module.exports = router;
