import React from 'react';
import './Button.css'
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "="
    //Is it a number is it not a number
}
const Button = props => (
    <div className={`button-wrapper ${
        isOperator(props.children)? null: "operator"
        }`}
        onClick={() => props.handleClick(props.children)}
        > 
        {props.children}
    </div>
)

export default Button;