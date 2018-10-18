import React from "react";

const SavedArticles = ({ children }) =>
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title text-center"><strong><i className="fa fa-table"></i> Saved Articles</strong></h3>
    </div>
    <div className="panel-body" id="well-section">
    {children}
    </div>
  </div>

export default SavedArticles;





