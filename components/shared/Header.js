import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

const BsNavLink = (props) => {
    const { route, title } = props;
    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link"> {title} </a>
        </Link>
    )
}


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
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Hyeeun Mok</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/" title="Home"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/about" title="About"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/projects" title="Project"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/blogs" title="Blog"/>
              </NavItem>
              <NavItem className="port-navbar-item">
                  <BsNavLink route="/resume" title="Resume"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}