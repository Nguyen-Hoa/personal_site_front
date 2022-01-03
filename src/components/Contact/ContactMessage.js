import React, {useState} from 'react';
import {sendMail} from './../APIs/mail_api';
import {
  Form,
  Input,
  TextArea,
  Segment,
} from 'semantic-ui-react';

export default function ContactMessage (){
  const [ret_addr, setRetAddr] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [invalid_email, setEmailInvalid] = useState(false);

  function handleSubmit (e) {
    e.preventDefault();

    // Send to admin
    sendMail(JSON.stringify({
      'to': 'hoaaaoh@gmail.com',
      'from': 'hoaaaoh@gmail.com', // Sendgrid API Verified sender.
      'subject': `nguyen-hoa.com, a message from ${name}`,
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
      'subject': `COPY OF MESSAGE TO nguyen-hoa.com`,
      'text': `This is a copy of the message you sent to nguyen-hoa.com \n \n ${body} \n \n Reply to ${ret_addr}`,
    }))
      .then(() => {
        console.log('Copy sent to sender.');
      })
      .catch((e) => {
        console.log(e);
        console.log('Copy to sender failed to send.');
      });
      
      setName('');
      setBody('');
      setRetAddr('');
  }

  function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
      setEmailInvalid(false);
      setRetAddr(inputText);
      return true;
    } 
    else if (inputText === ''){
      setEmailInvalid(false);
      setRetAddr(inputText);
      return true;
    }
    else {
      setEmailInvalid(true);
      setRetAddr(inputText);
      return false;
    }
  }

  return (
  <Segment>
      <Form onSubmit={handleSubmit}>
          <Form.Group widths='equal'>
          <Form.Field
              id='name-field'
              control={Input}
              placeholder='Contact Name'
              value={name}
              onChange={e => setName(e.target.value)}
          />
          <Form.Field
              id='retaddr-field'
              control={Input}
              error={invalid_email ? 'Please enter a valid email': false} 
              placeholder='Return E-mail Address'
              value={ret_addr}
              onChange={e => ValidateEmail(e.target.value)}
          />
          </Form.Group>
          
          <Form.Field
              id='body-field'
              control={TextArea}
              placeholder="Message"
              value={body}
              onChange={e => setBody(e.target.value)}
          />

          <Form.Button content='Send' disabled={name === '' || body === '' || invalid_email}/>
      </Form>
    </Segment>
  )
}