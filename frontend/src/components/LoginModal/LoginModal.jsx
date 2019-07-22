/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';
import AuthForm from '../AuthForm/AuthForm';
import { connect } from 'react-redux';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const closeBtn = <button className="close" onClick={this.props.toggle}>&times;</button>;
    return (
      <div>
        <Modal 
          isOpen={this.props.visible}
          className={this.props.className}
          toggle={this.props.toggle}
        >
          <ModalHeader close={closeBtn}>Log in</ModalHeader>
          <ModalBody>
            {this.props.authentification.user.isConnected ?
              <p>You successfully connected !</p>
              :
              <AuthForm />
            }
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);