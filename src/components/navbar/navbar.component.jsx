import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

const Navbar = ({ currentUser }) => (
    <div>
        <ul>
            {currentUser ?
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
                    currentUser ?
                        <div>
                            <a onClick={() => auth.signOut()}>Sign Out</a>
                        </div> :
                        <div>
                            <Link to='/learn-react-project-one/login'>Login</Link>
                        </div>
                }
            </li>
        </ul>
    </div>
)

export default Navbar;