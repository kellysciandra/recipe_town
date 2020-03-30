import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, Form, Input, NavLink  } from 'reactstrap';
// import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

const NavBar = (props) => { 
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  // const links = (props.artist.id) ? <SignedInLinks />
  //       : <SignedOutLinks />
  const closeNav = () => setCollapsed(collapsed);

  return (
    <div id='navbar'>  
      <Navbar className='nav' light>
        <NavbarToggler onClick={toggleNavbar} className='toggler'/>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <NavLink href='/cookbook' className='link'>cook/book</NavLink> 
              <NavLink href='/submitrecipe' className='link'>submit recipe</NavLink>
              <NavLink href='/askchef' className='link'>ask a chef</NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
          {/* <Form>
            <Input className='nav_search' type="search" placeholder="search">search</Input>
          </Form> */}
        <NavbarBrand href='/' className='brand_link'> 
        Really Good
        <NavLink href='/cookbook' className='mobile_link'>cook/book</NavLink> 
        <NavLink href='#recipe' className='mobile_link'>submit a recipe</NavLink> 
        <NavLink href='#ask' className='mobile_link'>ask a chef</NavLink> 
        </NavbarBrand> 
        
      </Navbar>
    </div>
  );
}



export default NavBar







