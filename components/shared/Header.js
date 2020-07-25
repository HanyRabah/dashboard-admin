import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

const LoginLink = () => <a className="nav-link port-navbar-link clickable"  href="/api/v1/user/login" >Login</a>
const LogOutLink = () => <a className="nav-link port-navbar-link clickable" href="/api/v1/user/logout" >LogOut</a>


const Header = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
      <Navbar color="light" light expand="md" className="admin-header">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>
          <Nav>
          { user && 
            <UncontrolledDropdown nav inNavbar color="gray">
              <DropdownToggle nav caret>
                <div className="dropdown-title">
                    <span>Hi,</span> {user.name}
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Settings
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    <LogOutLink />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          }
           { !user && 
                
                <NavItem className="port-navbar-item">
                  <LoginLink />
                </NavItem>
              }
          
          </Nav>
        </Collapse>
      </Navbar>
      );
}

export default Header;
