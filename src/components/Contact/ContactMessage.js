import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
  Segment,
} from 'semantic-ui-react'

class ContactMessage extends Component {

  render() {
    return (
    <Segment>
        <Form>
            <Form.Group widths='equal'>
            <Form.Field
                control={Input}
                placeholder='First name'
            />
            <Form.Field
                control={Input}
                placeholder='Last name'
            />
            </Form.Group>
            
            <Form.Field
                control={TextArea}
                label='Message'
            />

            <Form.Field
                control={Input}
                label='Return Address'
                placeholder='email, phone number, etc'
            />
            
            <Form.Field control={Button}>Send</Form.Field>
        </Form>
      </Segment>
    )
  }
}

export default ContactMessage