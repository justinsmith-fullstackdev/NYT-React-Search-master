import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Results from "../../components/Results";
import SaveBtn from "../../components/SaveBtn";
import { ResultList, ResultListItem } from "../../components/ResultList";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";


class Home extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  findArticles = event => {
  	event.preventDefault();
  	API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
		.then(res => {
			this.setState({ articles: res.data.docs.slice(0,5)})
			console.log(this.state.articles);
		})
	  	.catch(err => console.log(err));
  };

  saveArticle = article => {
    API.saveArticle({
        title: article.headline.main,
        url: article.web_url,
        snippet: article.snippet     
    })
    .then(alert("Article Saved!"))
    .catch(err => console.log(err));
  };

	render() {
		return (
		    <Container>
            	<Jumbotron>
					<h1 className="text-center">New York Times Article Scrubber</h1>
					<h2 className="text-center">Search for and annotate articles of interest!</h2>
            	</Jumbotron>
		        <Row>
		        	<Col size="sm-12">
		          		<div className="panel panel-primary">
          					<div className="panel-heading">
            					<h3 className="panel-title text-center"><strong><i className="fa fa-list-alt"></i>   Search Parameters</strong></h3>
          					</div>
          					<div className="panel-body">
					            <form>
	              					<div className="form-group">
	                					<label htmlFor="topic">Topic:</label>
	                					<input name="topic" value={this.state.topic} onChange={this.handleInputChange} placeholder="Search For a Topic" type="text" className="form-control" id="topic"></input>
	              					</div>
	              					<div className="form-group">
	                					<label htmlFor="startYear">Start Year:</label>
										<input name="startYear" value={this.state.startYear} onChange={this.handleInputChange} placeholder="Start Year" type="text" className="form-control" id="startYear"></input>
	              					</div>
	              					<div className="form-group">
	                					<label htmlFor="endYear">End Year:</label>
	                					<input name="endYear" value={this.state.endYear} onChange={this.handleInputChange} placeholder="End Year" type="text" className="form-control" id="endYear"></input>
	              					</div>
	              					<button type="submit" onClick={this.findArticles} className="btn btn-primary" id="run-search"><i className="fa fa-search"></i> Search</button>
            					</form>
          					</div>
        				</div>
		          	</Col>
		        </Row>
		        <Row>
					<Col size="sm-12">
		          		<Results>
		          		{!this.state.articles.length ? (
                			<h3 className="text-center">Please search for an article!</h3>
              			) : (
                			<ResultList>
                  				{this.state.articles.map(article => {
                    				return (
                      					<ResultListItem
                        					key={article.headline.main}
                        					title={article.headline.main.length ? (
                        						article.headline.main
                        					) : (
                        						"[Headline not available]"
                        					)}
                        					href={article.web_url}
                        					snippet={article.snippet}
                                >
                                <SaveBtn
                                  onClick={() => this.saveArticle(article)}
                                />
                                </ResultListItem>
                    				);
                  				})}
                			</ResultList>
              			)}
              			</Results>
		          	</Col>
		        </Row>
		    </Container>
	    );
	}
}

export default Home;