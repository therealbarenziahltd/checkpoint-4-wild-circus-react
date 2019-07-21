import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import franceFlag from '../../assets/icons/france-flag.png';
import usaFlag from '../../assets/icons/usa-flag.png';
import './Navbar.scss';
import { Translate, setActiveLanguage, withLocalize } from 'react-localize-redux';
import SignUpModal from '../SignUpModal/SignUpModal';
import LoginModal from '../LoginModal/LoginModal';

class Navnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      language: 'en',
      loginModalVisible: false,
      signupModalVisible: false,
      modal: false
    };
    this.localize = this.localize.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignupModal = this.toggleSignupModal.bind(this);
  }



  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  localize(locString){
    this.setState({language : locString});
    setActiveLanguage(locString);
  }

  toggleLoginModal() {
    this.setState(prevState => ({
      loginModalVisible: !prevState.loginModalVisible
    }));
  }

  toggleSignupModal() {
    this.setState(prevState => ({
      signupModalVisible: !prevState.signupModalVisible
    }));
  }

  render() {
    return (
      <div className='myNavbar'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">Wild Circus</NavbarBrand>
          <NavbarToggler onClick={() => this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/shows"><Translate id='shows'></Translate></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/golden-book"><Translate id='golden-book'/></NavLink>
              </NavItem>
              <NavItem>
                <img 
                  className='flag-image'
                  src={franceFlag} 
                  alt={franceFlag} 
                  title='Switch to FR'
                  onClick={() => this.localize('fr')}
                />
              </NavItem>
              <NavItem>
                <img 
                  className='flag-image'
                  src={usaFlag} 
                  alt={usaFlag} 
                  title='Switch to EN' 
                  onClick={() => {
                    setActiveLanguage('fr');
                  }
                  }
                />
              </NavItem>
              <NavItem>
                <Button color="danger" onClick={this.toggleLoginModal}>Log in</Button>
              </NavItem>
              <NavItem>
                <Button color="danger" onClick={this.toggleSignupModal}>Sign Up</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <LoginModal visible={this.state.loginModalVisible} toggle={this.toggleLoginModal}/>
        <SignUpModal visible={this.state.signupModalVisible} toggle={this.toggleSignupModal}/>
      </div>
    );
  }
}

export default withLocalize(Navnav);