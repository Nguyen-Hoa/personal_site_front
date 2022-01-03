import React from 'react'
import { Menu, Modal } from 'semantic-ui-react'
import ContactMessage from './ContactMessage'

export default function ContactMenu () {
  return (
    <Menu icon style={{justifyContent: 'center'}}>

      <Menu.Item
        as='a' 
        href='https://linkedin.com/in/hoacomputer'
        icon='linkedin'
        target="_blank" 
        rel="noopener noreferrer"
      />

      <Menu.Item 
        as='a' 
        href='https://github.com/nguyen-hoa'
        icon='github'
        target="_blank" 
        rel="noopener noreferrer"
      />

      <Modal trigger={<Menu.Item as='a' icon='mail'/>}>
        <Modal.Header>Leave a message</Modal.Header>
        <Modal.Content>
          <ContactMessage/>
        </Modal.Content>
      </Modal>

    </Menu>
  );
}