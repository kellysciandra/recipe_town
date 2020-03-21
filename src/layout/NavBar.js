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


  return (
    <div className='nav_container'>  
      <Navbar className='nav' light>
        <NavbarToggler onClick={toggleNavbar} className='toggler'/>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <NavLink href='/newrecipe' className='link'>submit recipe</NavLink>
              <NavLink href='/chefs' className='link'>ask a chef</NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
          {/* <Form>
            <Input className='nav_search' type="search" placeholder="search">search</Input>
          </Form> */}
        <NavbarBrand href='/' className='brand_link'> 
        Recipe Town
        <NavLink href='/newrecipe' className='mobile_link'>submit recipe</NavLink>
         <NavLink href='/chefs' className='mobile_link'>ask a chef</NavLink> 
        </NavbarBrand> 

      
     
       
      </Navbar>
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     artist: state.auth.artist
//   }
// }


export default NavBar







