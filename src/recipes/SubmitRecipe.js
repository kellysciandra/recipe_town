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
      ingredients: ''
     }
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }


  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
    .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const { name, email, instagram, recipe_name, ingredients } = this.state;
    return (
      <div id="recipe">
        <h3>submit a recipe</h3><br></br><br></br>
        <div className='recipe_form_card'>
        <form onSubmit={this.handleSubmit} data-netlify="true" className='contact' name='contact' method='post' data-netlify-honeypot="bot-field">
            <input onChange={this.handleChange} className='recipe_input' placeholder="name"  name='name' bsSize="lg" value={name}/>
            <input onChange={this.handleChange} className='recipe_input' placeholder="email" name='email' bsSize="lg" value={email}/>
            <input onChange={this.handleChange}className='recipe_input'placeholder="instagram" name='instagram' bsSize="lg" value={instagram} />
            <input onChange={this.handleChange} className='recipe_input'placeholder="recipe name" name='recipe_name' bsSize="lg" value={recipe_name} />
            <input onChange={this.handleChange} className='recipe_input'placeholder="ingredients" name='ingredients' bsSize="lg" value={ingredients}/>
            <Button className='ask_input btn' color="secondary" type="submit">submit</Button>
           </form>
           <section className='recipe_form_display'>
              {this.state.name}<br></br>
              {this.state.email}<br></br>
              {this.state.instagram}<br></br>
              {this.state.recipe_name}<br></br>
              {this.state.ingredients}<br></br>
            </section>
        </div> 
       
      </div>
    )
  }
}

export default SubmitRecipe;