import React from 'react'
import "../App.css"
export default function Title({name,title}) {
    return (
        <React.Fragment>
    <div className="row">
        <div className="text-title col  s12 m12 l12 center">
    <h4>{name} <strong className="blue-text">{title}</strong></h4>
            </div>
    </div>
        </React.Fragment>
    )
}
