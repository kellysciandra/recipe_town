import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <div id='bottom'>
                <Nav>
                    <NavItem className='column1'><br></br>
                        recipeTown
                        <NavLink className='footer_link' href="#">terms and conditions</NavLink>
                    </NavItem>

                    <NavItem className='column2'><br></br>
                        chefs
                        <NavLink className='footer_link' href="#">services</NavLink>
                    </NavItem>

                    <NavItem className='column4'><br></br>
                        follow us 
                        <NavLink className='footer_link' href="#">instagram</NavLink>
                        <NavLink className='footer_link' href="#">spotify</NavLink>
                    </NavItem>

                    <NavItem className='column5'><br></br>
                        @2020 recipeTown, inc. 
                        
                    </NavItem>
                </Nav>
            </div>
        );
    };
};

export default Footer;