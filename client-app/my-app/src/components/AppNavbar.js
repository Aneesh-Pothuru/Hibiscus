import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const AppNavBar = props => {
  // React Hook: Used to set state, isOpen is set to false
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Function: Use toggle to set isOpen
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Hibiscus</NavbarBrand>
          <NavbarToggler onClick={() => toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" nabar>
              <NavItem>
                <NavLink href="https://github.com/Aneesh-Pothuru/Hibiscus">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
