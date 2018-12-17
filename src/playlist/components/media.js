import React, { Component } from 'react';
import propTypes from 'prop-types';
import './media.css';

class Media extends Component {
  // constructor(props) {
  //   super(props)
  //   //bind me va a enlazar con Media
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleClick(event){
  //   console.log(this.props.title);
  // }

  // ahora de una forma mas prolija con ecmascrit7 y arrowfuctions ya que heredan el concepto de su padre
  handleClick = (event) => {
    console.log(this.props.title);
  }
  render() {
   
    
    
    return (
      <div className= "Media" onClick={this.handleClick}>
        <div>
          <img 
          src={this.props.image} 
          alt= ""
          width={260}
          height={160}
          />
          <h3 className= "Media-title">{this.props.title}</h3>
          <p className= "author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  author: propTypes.string,
}

export default Media;