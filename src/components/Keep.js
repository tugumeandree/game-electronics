import React, { Component } from 'react'
import Pic from '../phone.png';

export default class Product extends Component {
 constructor(props){
   super(props);
   this.state={
    brand:"Apple",
    price:"2000",
    color:"White",
    year:"2009"
};
 }
  
 changeColor=()=>{
   this.setState({color:"blue"});
 }

 
  render() {
    return (
      <React.Fragment>
     <div className="row">
        <div className="col  s12 m6 l3">

        <div className="card">
        <div className="card-image">
          <img src={Pic}  alt=""/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>

            </div>
        <div className="col  s12 m6 l3">

             <div className="card">
        <div className="card-image">
          <img src={Pic}  alt=""/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
            
            </div>

        <div className="col  s12 m6 l3">
            
        <div className="card">
        <div className="card-image">
          <img src={Pic}  alt=""/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
            
            </div>

        <div className="col  s12 m6 l3">
            
        <div className="card">
        <div className="card-image">
          <img src={Pic}  alt=""/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
            
            </div>
      </div>
      </React.Fragment>
    )
  }
}