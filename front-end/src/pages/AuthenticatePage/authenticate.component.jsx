import React from 'react';
import { SignIn } from '../../components/signin/signin.component';
import { SignUp } from '../../components/signup/signup.component';

export class AuthenticatePage extends React.Component {
    render() {
        return (
            <div>
                <SignIn />
                <SignUp />
            </div>
        )
    }
}