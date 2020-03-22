import React, { Component } from 'react';
import { Form, Input, NavLink, FormGroup, Button  } from 'reactstrap';


class AskChef extends Component {
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
      <div id="ask">
        <br></br><br></br><h3>ask a chef</h3><br></br><br></br>
        <div className='ask_form_card'>
            <Form className=''>
            <Input onChange={this.handleChange} className='ask_input' placeholder="name"  id='name' bsSize="lg" />
            <Input onChange={this.handleChange} className='ask_input' placeholder="email" id='email' bsSize="lg" />
            <Input onChange={this.handleChange} type="textarea" className='ask_input'placeholder="instagram" id='instagram' bsSize="lg" />
            <Button className='ask_input btn' color="secondary">submit</Button>
           </Form>
           <section className='ask_form_display'>
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

export default AskChef;