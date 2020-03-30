import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <div id='bottom'>
                <Nav>
                    <NavItem className='column1'><br></br>
                        reallygood_recipes
                        
                    </NavItem>

                    <NavItem className='column2'><br></br>
                        reallygood_chefs
                      
                    </NavItem>

                    <NavItem className='column4'><br></br>
                    <a href='https://instagram.com/reallygood_network?igshid=16ojs1ne7nz0y' >instagram<i class="fab fa-instagram"></i></a>
                    </NavItem>

                    <NavItem className='column5'><br></br>
                        @2020 reallygood, inc. 
                        
                    </NavItem>
                </Nav>
            </div>
        );
    };
};

export default Footer;