import React from "react";
import "./SaveBtn.css";

const SaveBtn = props => (
	<button type="submit" className="btn btn-primary save-btn" {...props}>Save Article</button>
);

// class SaveBtn extends React.Component {
//   constructor(props) {    
//     super(props)
//     this.state = {
//       clicked: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState({
//       clicked: !this.state.clicked
//     })
//   }
//   render() {
//     return (
//       <ButtonChild        
//         className={ this.state.clicked ? "btn btn-success save-btn disabled" : "btn btn-primary save-btn" }
//         toggleClassName={ this.handleClick }
//       >

//       	{ this.state.clicked ? "Article Saved!" : "Save Article" }

//       </ButtonChild>
//     )
//   }
// }

// class ButtonChild extends React.Component {
//   render() {
//     return (
//       <button type="submit" 
//         className={ this.props.className }
//         onClick={ this.props.toggleClassName }
//       >
//         { this.props.children }
//       </button>
//     )    
//   }
// }

export default SaveBtn;