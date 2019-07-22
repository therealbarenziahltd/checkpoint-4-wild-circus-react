import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import './Footer.scss';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='myFooter'>
        <Navbar color="dark" dark expand="md">
          <Nav className="ml-auto" navbar>
            <div className='myContainer'>
              <NavItem>
                <NavLink href="/about">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/legal-mentions">Legal mentions</NavLink>
              </NavItem>
              <NavItem>
                <div className='myRowContainer'>
                  <img className='myIcon' src='http://placekitten.com/g/50/50' alt='' />
                  <img className='myIcon' src='http://placekitten.com/g/50/50' alt='' />
                  <img className='myIcon'src='http://placekitten.com/g/50/50' alt='' />
                  <img className='myIcon' src='http://placekitten.com/g/50/50' alt='' />
                </div>
              </NavItem>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}