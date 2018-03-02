import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

class ActionModal extends Component {
  constructor(props){
    super(props)
    this.state ={
      isModalOpen: false
    }
  }
  componentWillReceiveProps(nextProps){
    const { albumLists, isAlbumFetching } = nextProps;
      if(albumLists && albumLists.length == 0 && !isAlbumFetching) {
      this.setState({ isModalOpen: true });
    }
  }

  render() {
    return(
      <Modal open={this.state.isModalOpen} basic size='small'>
        <Header content='Oops...' />
        <Modal.Content>
          <p>Something went wrong!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={()=>this.setState({ isModalOpen: false })}
            basic 
            color='red' 
            inverted
            icon="remove"
          >
          </Button>
        </Modal.Actions>
      </Modal>
    ) 
  }
}

export default ActionModal;
