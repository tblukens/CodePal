import React, { Component } from 'react';

import Field from './field/Field';

class Fields extends Component{
    
    
    
    render(){

        return this.props.fields.map((field, index) => {
               return <Field
                   click={() => this.clicked(index)}
                   name={field.id}
                   properName={field.properName}
                   fontAwesome={field.fontAwesome}
                   value={field.value}
                   changed={(event) => this.changed(event, field.id)} />
           });
    }
} 

export default Fields;