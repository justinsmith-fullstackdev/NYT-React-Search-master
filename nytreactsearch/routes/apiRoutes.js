const axios = require("axios");
const router = require("express").Router();
const savedArticlesController = require("../controllers/savedArticlesController");

// ROUTES
// ==========================================================

router.get("/articles", (req, res) => {

	// SETUP VARIABLES
	// ==========================================================

	// Save incoming object
	let queryObject = req.query;

	// Construct query URL
	const AUTH_KEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
	const QUERY = queryObject.query;
	const NUM_RESULTS = 5;
	const START_YEAR = queryObject.begin_date;
	const END_YEAR = queryObject.end_date;

	const QUERY_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${AUTH_KEY}&q=${QUERY}&sort=newest&begin_date=${START_YEAR}0101&end_date=${END_YEAR}0101`

	// Fetch data from NYT API
	axios
		.get(QUERY_URL)
		.then(results => {
			res.json(results.data.response);
			//console.log(results.data.response);
		})
		.catch(err => res.status(422).json(err));

});

router.route("/savedArticles")
  .get(savedArticlesController.getSavedArticles)
  .post(savedArticlesController.saveArticle);

router.route("/savedArticles/:id")
  .get(savedArticlesController.findArticleById)
  .delete(savedArticlesController.deleteArticle);

module.exports = router;


