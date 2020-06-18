import React from "react";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";



export default class Details extends React.Component {
    render(){
  return (
    <ProductConsumer>
      {value=>{
  const{
    id,
    company,
    img,
    info,
    price,
    title,
    inCart
  }= value.detailProduct;
     return(
       <div className="container">
          <div className="row">
            <div className="center">
              <h4>{title}</h4>
              </div>
            </div>

            <div className="row">
              <div> 
                <img className="img center responsive" src={img} alt="product"/>
                </div>
                <div className="center">
                <h5 className="center">model:{title}</h5>
     <h6 className="center">made by:{company}</h6>
     <h6 className="center">${price}</h6>
     <p className="center">{info}</p>
              </div>
              <div>
                <Link to ="/">
                  <ButtonContainer>BackToProducts</ButtonContainer>
                </Link>
               
                  <ButtonContainer 
                  cart
                  disabled={inCart?true:false}
                  onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id)
                  }}>
                    
                    {inCart?"inCart":"add to cart"}
                    </ButtonContainer>
             
              </div>
                </div>
              
       </div>
     )
     }}
    </ProductConsumer>
     
  );
}

}