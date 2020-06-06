import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
 
  render() {
    const{id,title,img,price,inCart}=this.props.product
    return (
      <ProductWrapper className="col  s12 m6 l3">
   <div className="card">
     <ProductConsumer >
       {(value)=>(<div 
       className="card-image" 
       onClick={()=>{
         value.handleDetail(id)}}>
          <Link to="/details">
          <img className="img" src={img}  alt="product"/>
          </Link>
          <button className="btn-large" 
                  disabled={inCart?true:false}
                  onClick={()=>{
                    value.addToCart(id)}}>

{inCart?  (
<p className="" disabled>
  {""}
  in Cart
  </p>) : (
  <i className="fas fa-cart-plus"/>
  )}
          </button>
        
        </div>)}
        
        </ProductConsumer>
        <div className="card-action">
         <p >{title}</p>
         <h5><span>$</span>{price}</h5>
        </div>
      </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}
const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition:all 1s linear;
}

.card-action{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
  }
  .card-action{
    background:rgba(247,247,247);
  }
}
.card-image{
  position:relative;
  overflow:hidden;
}
.img{
  transition:all 1s linear;
}
.card-image:hover .img {
transform:scale(1.2);
}
.btn-large{
  background:var(--mainDark);
  border:none;
  border-radius:1rem 9rem 9rem 9rem;
  transform:translate(100%,100%);
  transition:all 0.5s linear;
  }

.card-image:hover .btn-large{
  transform:translate(0, 0);
}

.btn-large:hover{
  color:var(--mainPink);
  cursor:pointer;
}
`