import React, { useState, useEffect } from "react";
import auth0 from "../../services/auth0";
import BsNavLink from "../../helpers/BsNavLink";
import { Link, animateScroll as scroll } from "react-scroll";
import { Router } from "../../routes";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";

const Login = () => {
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link pointer">
      Login
    </span>
  );
};

const Logout = () => {
  return (
    <span onClick={auth0.logout} className="nav-link port-navbar-link pointer">
      Logout
    </span>
  );
};

const NavbarComponent = (props) => {
  const [headerLogo, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");

  const { isAuthenticated, className } = props;

  const NavLinkClick = async (props) => {
    props.preventDefault();
    props.persist();

    const changeRoute = await Router.pushRoute("/");
    if (changeRoute) {
      const anchor = document.getElementById(props.target.id);

      if (anchor.id === "Contact") {
        anchor.onClick = scroll.scrollToBottom();
        anchor.click();
      } else {
        anchor.click();
      }
    }
  };

  const toggle = () => setIsOpen(!isOpen);

  const scrollStickyActiveNav = () => {
    //Sticky
    const header = document.getElementById("navbar");

    if (window.pageYOffset >= 80) {
      header.classList.add("navbar-sticky");
      header.classList.remove("absolute");
      setHeader(true);
    } else {
      header.classList.remove("navbar-sticky");
      header.classList.add("absolute");
      setHeader(false);
    }
  };
  const handleSetActive = (link) => {
    if (link === "/home") {
      console.log(path);
      return Router.replace("/", link, { shallow: true });
    }
    if (link === "/about") {
      console.log(path);
      return Router.replace("/", link, { shallow: true });
    }
    if (link === "/whatIDo") {
      return Router.replace("/", link, { shallow: true });
    }
    if (link === "/projects") {
      console.log(path);
      return Router.replace("/", link, { shallow: true });
    }
    if (link === "/contact") {
      return Router.replace("/", link, { shallow: true });
    }
  };
  useEffect(() => {
    setPath(window.location.pathname);
    console.log(path);

    window.addEventListener("scroll", scrollStickyActiveNav);

    return () => {
      window.removeEventListener("scroll", scrollStickyActiveNav);
    };
  }, []);

  return (
    <>
      <Navbar
        id="navbar"
        className={`port-navbar port-nav-base absolute ${className}`}
        light
        expand="md"
      >
        <Container>
          <NavbarBrand className="port-navbar-brand" href="/">
            <div className="logo-container">
              <div
                className={
                  headerLogo
                    ? "logo-container-logo navbar-rotate"
                    : "logo-container-logo"
                }
              >
                W
              </div>
              <div className="logo-container-text">Poninski</div>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                {path !== "/" && path !== "/projects" ? (
                  <BsNavLink
                    route="/"
                    title="Home"
                    id="Home"
                    passHref={true}
                    clickOn={NavLinkClick}
                  />
                ) : (
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={false}
                    duration={500}
                    delay={250}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className={`nav-link port-navbar-link pointer`}
                    id="Home"
                    onClick={() => handleSetActive("/home")}
                  >
                    Home
                  </Link>
                )}
              </NavItem>
              <NavItem className="port-navbar-item">
                {path !== "/" && path !== "/projects" ? (
                  <BsNavLink
                    route="/"
                    title="About"
                    id="About"
                    clickOn={NavLinkClick}
                  />
                ) : (
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={false}
                    duration={500}
                    delay={250}
                    isDynamic={true}
                    ignoreCancelEvents={true}
                    className={`nav-link port-navbar-link pointer`}
                    id="About"
                    onClick={() => handleSetActive("/about")}
                  >
                    About
                  </Link>
                )}
              </NavItem>
              <NavItem className="port-navbar-item">
                {path !== "/" && path !== "/projects" ? (
                  <BsNavLink
                    route="/"
                    title="What I do"
                    id="What"
                    clickOn={NavLinkClick}
                  />
                ) : (
                  <Link
                    activeClass="active"
                    to="what"
                    spy={true}
                    smooth={true}
                    hashSpy={false}
                    duration={500}
                    delay={250}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className={`nav-link port-navbar-link pointer`}
                    id="What"
                    onClick={() => handleSetActive("/whatIDo")}
                  >
                    What I do
                  </Link>
                )}
              </NavItem>
              <NavItem className="port-navbar-item">
                {path !== "/" && path !== "/projects" ? (
                  <BsNavLink
                    route="/"
                    title="Projects"
                    id="Projects"
                    clickOn={NavLinkClick}
                  />
                ) : (
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    hashSpy={false}
                    duration={500}
                    delay={250}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className={`nav-link port-navbar-link pointer`}
                    id="Projects"
                    onClick={() => handleSetActive("/projects")}
                  >
                    Projects
                  </Link>
                )}
              </NavItem>
              <NavItem className="port-navbar-item">
                {path !== "/" && path !== "/projects" ? (
                  <BsNavLink
                    route="/"
                    title="Contact"
                    id="Contact"
                    clickOn={NavLinkClick}
                  />
                ) : (
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={false}
                    duration={500}
                    delay={250}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    className={`nav-link port-navbar-link pointer`}
                    id="Contact"
                    onClick={() => handleSetActive("/contact")}
                  >
                    Contact
                  </Link>
                )}
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="Cv" />
              </NavItem>
              {!isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Login />
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem className="port-navbar-item">
                  <Logout />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
