import React, {Component} from 'react';

class Header extends Component {

  addStyle = (e) =>{
   if (e.target.classList.contains('styled')) {
    e.target.classList.remove('styled');
   } else {
    e.target.classList.add('styled');
   }
  }



  render(){
    return (
      <div className="Header">
          <b onMouseOver={this.addStyle}>{this.props.title}</b>
      </div>
    );
  }
  
}

export default Header;
