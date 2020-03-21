import React, { Component } from 'react';
import { Form, Input, NavLink, FormGroup  } from 'reactstrap';


class SubmitRecipe extends Component {
  constructor() {
    super()

    this.state= {
      name:'',
      email: '',
      instagram: '',
      recipe_name: '',
      ingredients: []
     }
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className='recipe_form_card'>
            <Form className=''>
            <Input onChange={this.handleChange} className='recipe_input' placeholder="name"  id='name' bsSize="lg" />
            <Input onChange={this.handleChange} className='recipe_input' placeholder="email" id='email' bsSize="lg" />
            <Input onChange={this.handleChange}className='recipe_input'placeholder="instagram" id='instagram' bsSize="lg" />
            <Input onChange={this.handleChange} className='recipe_input'placeholder="recipe name" id='recipe_name' bsSize="lg" />
            <Input onChange={this.handleChange} className='recipe_input'placeholder="ingredient" id='ingredient' bsSize="lg" />
           </Form>
           <section className='recipe_form_display'>
              {this.state.name}<br></br>
              {this.state.email}<br></br>
              {this.state.instagram}<br></br>
              {this.state.recipe_name}<br></br>
              {this.state.ingredient}<br></br>
            </section>
        </div> 
       
      </div>
    )
  }
}

export default SubmitRecipe;