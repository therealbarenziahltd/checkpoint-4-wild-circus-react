/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal 
          isOpen={this.props.visible}
          className={this.props.className}
          toggle={this.props.toggle}
        >
          <ModalHeader>Sign up</ModalHeader>
          <ModalBody>
            !
          </ModalBody>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={() => alert('hello')}>Do Something</Button>{' '}
            <Button
              color="secondary" 
              onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default SignUpModal;