import React, { Component } from 'react';
import { default as firebaseApp } from '../firebase';


class SignUp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    signUp() {
        const {email, password} = this.state;
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('signUp error', error);
                this.setState({error});
            });
    }

    render () {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={(event) => this.setState({email: event.target.value})}
                        style={{marginRight: '5px'}}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={(event) => this.setState({password: event.target.value})}
                        style={{marginRight: '5px'}}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signUp()}
                    >Sign Up</button>
                </div>
                <div className="">{this.state.error.message}</div>
            </div>
        );
    }
}


export default SignUp;
