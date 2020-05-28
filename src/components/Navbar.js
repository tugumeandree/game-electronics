/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from '../logo.png';
import styled from "styled-components";
import {ButtonContainer} from './Button';

export default class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
    <NavWrapper className="nav-extended">
        <div className="nav-wrapper">

        
          <ul id="nav-mobile" className="">
            <li>
          <Link to="/" >
           <img className="logo" src={logo} alt="Logo" />
           </Link>
           </li>
              <li className="right">
              <Link to="/cart">
              <ButtonContainer className="btn-large col-s6">
              <i className="fas fa-cart-plus"/>
              Cart
              </ButtonContainer>
                </Link>
              </li>
          </ul>
          
         

        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
          <li className="tab active">
              <Link to="/">
                Products
                </Link>
              </li>
        <li className="tab"><Link>Delivery</Link></li>
        <li className="tab"><Link>Payment</Link></li>
          </ul>
          </div>
      </NavWrapper>
     
      </React.Fragment>
       
    );
  }
}

const NavWrapper = styled.nav`
background:var(--mainPink);
.nav-content{
  color:var(--mainWhite)!importatnt;
  font-size:1.3rem;
  text-transform:capitalize;
}
`;
