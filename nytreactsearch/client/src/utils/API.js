import axios from "axios";

export default {
  
  findArticles: function(query, begin_date, end_date) {

    // Assign values to any empty parameters
    if (!query) {
        query = "cats";
    }

    if (!begin_date) {
        begin_date = "2017";
    }

    if (!end_date) {
        end_date = "2018";
    }

    // Get request
    return axios.get("/api/articles", 
    	{ params: 
    		{ 
    			query: query,
    			begin_date: begin_date,
    			end_date: end_date
    		}
    	}
    );
  },

  saveArticle: function(article) {
    return axios.post("/api/savedArticles", article);
  },

  getSavedArticles: function() {
    return axios.get("/api/savedArticles");
  },

  deleteArticle: function(articleId) {
    return axios.delete("/api/savedArticles/" + articleId);
  }
  
};



  // findArticleById: function(req, res) {
  //   db.Article
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }






