import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import NavCart from '../navbar-cart/nav-cart.component';
import NavCartDropdown from '../navbar-cart-dropdown/navbar-cart-dropdown.component';

const Navbar = ({ currentUser, hidden }) => (
    <div>
        <ul>
            {

                currentUser != null ?
                    <li>
                        <span>Welcome {currentUser.displayName}</span>
                    </li> :
                    null
            }
            <li>
                <Link to='/learn-react-project-one/'>Categories</Link>
            </li>
            <li>
                <Link to='/learn-react-project-one/shop'>Shop</Link>
            </li>
            <li>
                <Link to='/learn-react-project-one/old'>Monster App</Link>
            </li>
            <li>
                {
                    currentUser != null ? <div>
                        <a onClick={() => {
                            auth.signOut()
                            console.log('signout');
                        }}>Sign Out</a>
                    </div> :
                        <div>
                            <Link to='/learn-react-project-one/login'>Login</Link>
                        </div>
                }
            </li>
            <li>
                <NavCart>
                    {console.log(hidden)}
                </NavCart>
            </li>
        </ul>
        {

            hidden ? null :
                <NavCartDropdown />
        }

    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Navbar);