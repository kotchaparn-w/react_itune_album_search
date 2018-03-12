import React, { Component } from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

class ErrorModal extends Component {
  constructor(props){
    super(props)
    this.state ={
      isModalOpen: false,
      errorMessage: null
    }
  }
  componentWillReceiveProps(nextProps){
    const { fetchAlbumSuccess, fetchAlbumError, isAlbumFetching } = nextProps;
      if(fetchAlbumSuccess === false && isAlbumFetching === false) {
      this.setState({ isModalOpen: true, errorMessage: fetchAlbumError });
    }
  }

  render() {
    const { isModalOpen, errorMessage } = this.state;
    return(
      <Modal open={isModalOpen} basic size='small'>
        <Header content='Oops...' />
        <Modal.Content>
          <p>Something went wrong!</p>
          <p>{errorMessage}</p>
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

export default ErrorModal;
