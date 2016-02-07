var express = require('express');
var router = express.Router();

/* GET about page */
router.get('/', about);

function about (req, res) {
  console.log("Request about page")
  res.render('about');
}

/* URLS are relative to site/about/    */
//
// router.get('/team', function(req, res) {
//   res.send("Team page at site/about/team");
// })


module.exports = router;
