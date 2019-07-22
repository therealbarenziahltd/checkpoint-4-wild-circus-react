// @ts-nocheck
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../stores/actions/auth';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(){
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    const { user } = this.props.authentification;
    if (user.isConnected && user.isAdmin) {
      return <Redirect to="/comments" />;
    }
    return (
      <Container  className="flex-column flex-center flex-center-items full-height-screen color fond_logo">
        <Row className="bloc">
          <Col xs="12" md="6" >
            <div className="p-inputgroup ">
              <span className="p-inputgroup-addon Inputbackground">
                <i className="pi pi-user"></i>
              </span>
              <Input className='Inputbackground'
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Username" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon Inputbackground ">
                <i className="pi pi-lock"></i>
              </span>
              <Input className='Inputbackground'
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Password" />
            </div>
          </Col>
        </Row>
        <Row className="marged-top">
          <Col xs="12" >
            <Button onClick={this.loginUser} label="Se connecter" className="p-button-raised ,
            Inputbackgroundbutton" icon="pi pi-angle-right">Log in</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = {
  login
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);