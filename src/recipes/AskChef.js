import React, { Component } from 'react';
import { Form, Input, NavLink, FormGroup, Button  } from 'reactstrap';




class AskChef extends Component {
  constructor(props) {
    super(props)

    this.state= {
      name:'',
      email: '',
      message: '',
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
    const { name, email, message } = this.state;
    return (
      <div id="ask">
        <br></br><br></br><h3>ask a chef</h3><br></br><br></br>
        <div className='ask_form_card'>
            <form onSubmit={this.handleSubmit} data-netlify="true" className='contact' name='contact' method='post' data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />  
            <input onChange={this.handleChange} className='ask_input' type='text' placeholder="name"  name='name' bsSize="lg" value={name} />
            <input onChange={this.handleChange} className='ask_input' type='text' placeholder="email" name='email' bsSize="lg" value={email} />
            <input onChange={this.handleChange} type="textarea" className='ask_input' placeholder="ask politely" name='message' bsSize="lg" value={message} />
            <Button className='ask_input btn' color="secondary" type="submit" >submit</Button>
           </form>
           <section className='ask_form_display'>
              {this.state.name}<br></br>
              {this.state.email}<br></br>
              {this.state.message}<br></br>
            </section>
        </div> 
       
      </div>
    )
  }
}

export default AskChef;
