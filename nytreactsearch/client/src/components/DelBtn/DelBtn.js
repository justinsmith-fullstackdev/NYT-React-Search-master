import React from "react";
import "./DelBtn.css";

const DelBtn = props => (
	<button type="submit" className="btn btn-danger del-btn" {...props}>Delete Article</button>
);

export default DelBtn;
