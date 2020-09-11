import React from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
  Segment,
} from 'semantic-ui-react'

export default function ContactMessage (){

  return (
  <Segment>
      <Form>
          <Form.Group widths='equal'>
          <Form.Field
              control={Input}
              placeholder='Contact Name'
          />
          <Form.Field
              control={Input}
              placeholder='Organization'
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