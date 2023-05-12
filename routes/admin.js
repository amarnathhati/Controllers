const path = require('path');

const express = require('express');

const rootDir=require('../util/path');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
  });
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
router.post('/success', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = 'Form successfully filled';
    console.log(`Form submitted with name: ${name}, email: ${email}`);
   
   res.redirect('/admin/success?message=Form successfully filled');
   
});
router.get('/success', (req, res) => {
    const message = req.query.message;
   
    res.send(`<h1>${message}</h1>`);
   
  });

module.exports = router;