import React, { useState } from 'react';
import auth0 from '../../services/auth0';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const BsNavLink = (props) => {
const { route, title } = props;
  return (
    <Link href={route}>
        <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const Login = () => {
    return (
      <span 
        onClick={auth0.login} 
        className="nav-link port-navbar-link pointer">
        Login
      </span>
    )

  
}

const Logout = () => {
  return (
    <span 
     onClick={auth0.logout } 
     className="nav-link port-navbar-link pointer">
     Logout
     </span>
  );
}
const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const  { isAuthenticated, className }  = props;
  
  return (
    <div>
      <Navbar  className={`port-navbar port-nav-base absolute ${className}`} color="transparent" light expand="md">
        <NavbarBrand  className="port-navbar-brand" href="/"><span className="logo">W</span> Poninski</NavbarBrand>
          <NavbarToggler onClick={toggle} />
             <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                   <NavItem className="port-navbar-item">
                       <BsNavLink
                            route="/"
                            title="Home"
                        />
                    </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink
                    route="/about"
                    title="About"
                />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink
                    route="/projects"
                    title="Projects"
                />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink
                    route="/blog"
                    title="Blog"
                />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink
                    route="/cv"
                    title="Cv"
                />
            </NavItem>
            { !isAuthenticated &&
              <NavItem className="port-navbar-item">
                  <Login />
              </NavItem>
            }
            { isAuthenticated &&
              <NavItem className="port-navbar-item">
                  <Logout />
              </NavItem>
            }
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
