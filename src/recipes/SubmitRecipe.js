import React, { Component } from 'react';
import { Form, Input, NavLink, FormGroup, Button  } from 'reactstrap';


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
      <div id="recipe">
        <h3>submit a recipe</h3><br></br><br></br>
        <div className='recipe_form_card'>
            <Form className=''>
            <Input onChange={this.handleChange} className='recipe_input' placeholder="name"  id='name' bsSize="lg" />
            <Input onChange={this.handleChange} className='recipe_input' placeholder="email" id='email' bsSize="lg" />
            <Input onChange={this.handleChange}className='recipe_input'placeholder="instagram" id='instagram' bsSize="lg" />
            <Input onChange={this.handleChange} className='recipe_input'placeholder="recipe name" id='recipe_name' bsSize="lg" />
            <Input onChange={this.handleChange} className='recipe_input'placeholder="ingredient" id='ingredient' bsSize="lg" />
            <Button className='ask_input btn' color="secondary">submit</Button>
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