import React from 'react';
// import classes from './Field.css';
const field = (props) => {
return(

    <div className="form-group">
    <label htmlFor={props.name}>{props.properName}</label>
    <i className={props.fontAwesome}></i>
    <input required="" name={props.name} type="text" className="form-control" id={props.name} placeholder={props.value||props.properName} />
    {props.properName}
 </div>

)    

};

export default field;