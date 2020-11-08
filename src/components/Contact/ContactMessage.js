import React, {useState} from 'react';
import {sendMail} from './../APIs/mail_api';
import {
  Button,
  Form,
  Input,
  TextArea,
  Segment,
} from 'semantic-ui-react';

// Reset (blank) the Textfields after message send
const reset_fields = () => {
  document.getElementById('name').value = '';
  document.getElementById('retaddr').value ='';
  document.getElementById('message').value = '';
}

export default function ContactMessage (){
  const [ret_addr, setRetAddr] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email_err_msg, setEEM] = useState('');
  const [email_valid, setEmailInvalid] = useState(false);


  function handleSubmit (e) {
    e.preventDefault();

    // Send to admin
    sendMail(JSON.stringify({
      'to': 'hoaaaoh@gmail.com',
      'from': 'hoaaaoh@gmail.com', // Sendgrid API Verified sender.
      'subject': `Investocracy Contact, a message from ${name}`,
      'text': `${body} \n \n Reply to ${ret_addr}`,
    }))
      .then(() => {
        alert('Message Sent!');
      })
      .catch((e) => {
        console.log(e);
        alert('Message failed to send.')
      });

    // Send a copy to sender
    sendMail(JSON.stringify({
      'to': ret_addr,
      'from': 'hoaaaoh@gmail.com', // Sendgrid API Verified sender.
      'subject': `Investocracy Contact, a message from ${name}`,
      'text': `This is a copy of the message you sent to Investocracy \n \n ${body} \n \n Reply to ${ret_addr}`,
    }))
      .then(() => {
        console.log('Copy sent to sender.');
      })
      .catch((e) => {
        console.log(e);
        console.log('Copy to sender failed to send.');
      });
      
      reset_fields();
  }

  function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
      setEEM('');
      setEmailInvalid(false);
      setRetAddr(inputText);
      return true;
    } 
    else {
      setEEM('Enter a valid email.');
      setEmailInvalid(true);
      return false;
    }
  }

  return (
  <Segment>
      <Form>
          <Form.Group widths='equal'>
          <Form.Field
              id='name'
              control={Input}
              placeholder='Contact Name'
              autoComplete='off'
              onChange={e => setName(e.target.value)}
          />
          <Form.Field
              id='retaddt'
              control={Input}
              error={email_valid}
              helperText={email_err_msg}
              placeholder='Return E-mail Address'
              autoComplete='off'
              onChange={e => setRetAddr(e.target.value)}
          />
          </Form.Group>
          
          <Form.Field
              id='body'
              control={TextArea}
              placeholder="What is up?"
              autoComplete='off'
              onChange={e => setBody(e.target.value)}
          />

          <Form.Field control={Button}>Send</Form.Field>
      </Form>
    </Segment>
  )
}