import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'

import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class Test extends Component {
  state = {
    email: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      email: email,
     }
     emailjs.send('default_service', 'pbpie', templateParams, 'user_ThNL4Dj26ljch2etystMh')
     .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
        console.log('FAILED...', err);
     });
  
 }

handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <><br></br><br></br>
      <Toast>
 
      <section className='forward'>
      <ToastBody>
           <Form onSubmit={this.handleSubmit.bind(this)}>
          <Input className='forward_email' type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Enter email" />
          <Button className='forward_button' type="submit"> i want it</Button> 
          </Form>
          </ToastBody>
          </section>
      </Toast>
      </>
    )
  }
}
export default Test