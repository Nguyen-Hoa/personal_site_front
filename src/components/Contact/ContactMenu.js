import React, { Component } from 'react'
import { Menu, Modal } from 'semantic-ui-react'

import ContactMessage from './ContactMessage'

export default class ContactMenu extends Component {
  constructor(props) {
    super(props);
  }

  handleViewChange = (new_view) => {
    this.props.setView(new_view);
  }

  render() {

    return (
      <Menu icon vertical>

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
          // onClick={this.handleViewChange('cv')}
        />

      </Menu>
    )
  }
}