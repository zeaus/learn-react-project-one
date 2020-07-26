import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { auth, createUserProfile } from '../../firebase/firebase.util';

export class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        console.log(displayName, email, password, confirmPassword);
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
        } catch (error) {
            console.log('Error Signing up',error.message);
        }
        this.setState({ name: '', email: '', password: '', confirmPassword: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={this.state.displayName} required handleChange={this.handleChange} label="Name" />
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label="Email" />
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label="Password" />
                    <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword} required handleChange={this.handleChange} label="Confirm Password" />
                    <button type="submit" value='' >Sign Up </button>
                </form>
            </div>
        )
    }
}