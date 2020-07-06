import React, { Component } from 'react'
import { Menu, Modal, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

import ContactMessage from './ContactMessage'

export default function ContactMenu () {
  return (
    <Menu icon>

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

      <Modal
        trigger={<Menu.Item as='a' icon='mail'/>}
        header='Leave a message!'
        content={<ContactMessage/>}
      />

      <Menu.Item
        as='a'
        name="CV"
        onClick={<Link to="/cv"/>}
      />
    </Menu>
  );
}