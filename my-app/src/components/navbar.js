import React, { Component } from 'react';
import logo from './../assets/logo-reduzida.svg';
import {Link} from 'react-router-dom';
 
class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
            <Link to="/" className="Navbar-logo"><img src={logo} alt="logo" /></Link>
        </div>
    );
  }
}
 
export default Navbar;