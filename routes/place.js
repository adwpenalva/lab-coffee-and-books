'use strict';

const { Router } = require('express');
const router = new Router();

const Place = require('./../models/place');

//CRUD//

//CREATE
router.get('/create', (req, res, next) => {
  res.render('create-place');
});

router.post('/create', (req, res, next) => {
  //console.log(req.body);
  const { name } = req.body;
  const { type } = req.body;
  Place.create({
    name,
    type
  })
    .then(data => {
      //console.log(data);
      //res.redirect(`/place/${place._id}`);
      res.redirect('/places/placeslist');
    })
    .catch(error => {
      next(error);
    });
});

//UPDATE

//READ
//READ ALL DOCUMENTS
router.get('/placeslist', (req, res, next) => {
  Place.find()
    .then(data => {
      console.log(data);
      res.render('listplaces', { data });
    })
    .catch(error => console.log(error));
});

//READ ONE DOCUMENT
router.get('/placeslist/:id', (req, res, next) => {
  const id = req.params.id;
  Place.findById(id)
    .then(data => {
      console.log(data);
      res.render('singleplace', { data });
    })
    .catch(error => {
      console.log(error);
      res.render('error', { error });
    });
});

//DELETE

router.get('/:id/delete', (req, res, next) = > {
  const id = req.params.id;
  Place.findByIdAndDelete(id);
})

module.exports = router;
