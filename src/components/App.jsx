import React, { Component } from 'react';
import firebaseApp from '../firebase';


class App extends Component {
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

    signOut() {
        firebaseApp.auth().signOut();
    }

    render () {
        return (
            <div>
                App
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                    Sign out
                </button>
            </div>
        );
    }
}


export default App;
