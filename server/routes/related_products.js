// const axios = require('axios');
// const keys = require('../config.js');
const router = require('express').Router();
const { getRelatedProducts, combineDetailsAndImages } = require('../helpers/related_products_helpers.js');

router.get('/related-products', (req, res) => {
  const masterProductId = req.query.product_id;
  getRelatedProducts(masterProductId)
    .then(([productDetails, productImages]) => {
      return combineDetailsAndImages(productDetails, productImages);
    })
    .then((results) => {
      res.send(results);
      res.end();
    })
    .catch((error) => {
      console.log('error in axios ====== ', error);
      res.status(400).send('error in server app.get axios');
      res.end();
    });
});

module.exports = router;
