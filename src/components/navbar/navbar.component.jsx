import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import NavCart from '../navbar-cart/nav-cart.component';
import NavCartDropdown from '../navbar-cart-dropdown/navbar-cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.reselect';
import { selectCurrentUser } from '../../redux/user/user.reselect';
import styled from 'styled-components';

const NavWrapper = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
justify-content: flex-end;
padding: 20px;
box-shadow: 0px 0px 20px 0px #00000022;
height: 60px;
margin:0;
`

const NavItem = styled.li`
padding:20px;
`
const NavItemCart = styled.li`
padding: 0 20px;
display: flex;
align-items: center;
flex-wrap: wrap;
`
const WelcomeMessage = styled.li`
flex-grow: 1;
text-transform: uppercase;
padding: 20px;
`
const NavLink = styled(Link)`
text-decoration: none;
`


const Navbar = ({ currentUser, hidden }) => (
    <NavWrapper>
        {
            currentUser != null ?
                <WelcomeMessage>
                    <span>Welcome {currentUser.displayName}</span>
                </WelcomeMessage> :
                null
        }
        <NavItem>
            <NavLink to='/learn-react-project-one/'>Categories</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/learn-react-project-one/shop'>Shop</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to='/learn-react-project-one/old'>Monster App</NavLink>
        </NavItem>
        <NavItem>
            {
                currentUser != null ?
                    <div>
                        <a onClick={() => {
                            auth.signOut()
                            console.log('signout');
                        }}>Sign Out</a>
                    </div> :
                    <div>
                        <NavLink to='/learn-react-project-one/login'>Login</NavLink>
                    </div>
            }
        </NavItem>
        <NavItemCart>
            <NavCart />
            {
                hidden ? null :
                    <NavCartDropdown />
            }
        </NavItemCart>
    </NavWrapper>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Navbar);