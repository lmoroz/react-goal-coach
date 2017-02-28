import React, { Component } from 'react';
import { Link } from 'react-router';
import firebaseApp from '../firebase';

class SignIn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    signIn() {
        const {email, password} = this.state;
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('signIn error', error);
                this.setState({error});
            });
    }

    render () {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign In</h2>
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
                        onClick={() => this.signIn()}
                    >Sign In</button>
                </div>
                <div className="">{this.state.error.message}</div>
                <div className=""><Link to={'/signup'}>or Sign up if not registered</Link></div>
            </div>
        );
    }
}


export default SignIn;
