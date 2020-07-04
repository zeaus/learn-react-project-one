import React from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';
import { FormInput } from '../form-input/form-input.component';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.log('Error Signing In',error)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label="Email" />
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label="Password" />
                    <button type="submit" value=''>SignIn </button>
                    <button onClick={signInWithGoogle} value=''>SignIn With Google </button>
                </form>

            </div>
        )
    }
}