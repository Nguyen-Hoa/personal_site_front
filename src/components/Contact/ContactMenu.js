import React, { Component } from 'react'
import { Menu, Modal } from 'semantic-ui-react'

import ContactMessage from './ContactMessage'

export default class ContactMenu extends Component {


  render() {

    return (
      <Menu icon>

        <Menu.Item
          as='a' 
          href='https://linkedin.com/in/hoacomputer'
          icon='linkedin'
        />

        <Menu.Item 
          as='a' 
          href='https://github.com/nguyen-hoa'
          icon='github'
        />

        <Modal
          trigger={<Menu.Item as='a' icon='mail'/>}
          header='Leave a message!'
          content={<ContactMessage/>}
        />

      </Menu>
    )
  }
}