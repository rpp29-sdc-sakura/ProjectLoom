const router = require('express').Router();
const { getReviews, getMeta, putHelp, postReview, putReport, postInteraction, getMaster } = require('../helpers/reviews_helpers.js');

router.get('/master', (req, res) => {
  getMaster(req.query.productId, req.query.sort).then((results) => {
    res.send(results);
  }).catch((err) => {
    res.send([]);
  });
});

router.get('/reviews', (req, res) => {
  getReviews(req.query.productId, req.query.sort).then((results) => {
    res.send(results);
  }).catch((err) => {
    res.send([]);
  });
});

router.put('/reviews/helpful', (req, res) => {
  console.log('help', req.body)
  putHelp(req.body.review_Id).then((response) => {
    res.end();
  }).catch((err) => console.log(err));
});

router.get('/reviews/meta', (req, res) => {
  getMeta(req.query.product_id).then((results) => {
    res.send(results);
  }).catch((err) => res.send([]));
});

router.put('/reviews/report', (req, res) => {
  console.log('put request client', req.body)
  putReport(req.body.review_id).then((results) => { 
    console.log('put complete CLIENT');
    res.end()
  });
});

router.post('/reviews', (req, res) => {
  console.log('post review router')
  postReview(req.body).then((response) => {res.send('Success')}).catch((err) => console.log(err));
});

router.post('/reviews/interaction', (req, res) => {
  postInteraction(req.body.element);
});
 
module.exports = router;
 