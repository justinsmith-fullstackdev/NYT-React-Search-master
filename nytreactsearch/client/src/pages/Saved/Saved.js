import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SavedArticles from "../../components/SavedArticles";
import DelBtn from "../../components/DelBtn";
import { ResultList, ResultListItem } from "../../components/ResultList";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";


class Saved extends Component {
  state = {
    articles: [],
    title: "",
    url: "",
    snippet: ""
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
  	API.getSavedArticles()
  	.then(res =>
      this.setState({ articles: res.data, title: "", url: "", snippet: "" })
  	)
  	.catch(err => console.log(err));
  }

  deleteArticle = article => {
    API.deleteArticle(article._id)
    .then(res => this.getSavedArticles())
    .catch(err => console.log(err));
  };

	render() {
		return (
		    <Container>
            	<Jumbotron>
					<h1 className="text-center">Saved Articles</h1>
            	</Jumbotron>
		        <Row>
					<Col size="sm-12">
		          		<SavedArticles>
                    {this.state.articles.length ? (
                      <ResultList>
                        {this.state.articles.map(article => (
                            <ResultListItem
                              key={article._id}
                              title={article.title}
                              href={article.url}
                              snippet={article.snippet}
                            >
                                <DelBtn
                                  onClick={() => this.deleteArticle(article)}
                                />
                            </ResultListItem>
                        ))}
                      </ResultList>
                    ) : (
                      <h3 className="text-center">No Saved Articles to Display</h3>
                    )}
                  </SavedArticles>
		          	</Col>
		        </Row>
		    </Container>
	    );
	}
}

export default Saved;