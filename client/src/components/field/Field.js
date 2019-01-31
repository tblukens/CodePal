import React from 'react';
import classes from './Field.css';
const field = (props) => {
return(

    <div className="form-group">
    <label htmlFor={props.name}>{props.properName}</label>
    <i className={props.fontAwesome}></i>
    <input required="" name={props.name} type="text" className="form-control" id={props.name} placeholder={props.value||props.properName} />
    {props.properName}
 </div>

)    

    return (
        <div className={classes.Field}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default field;