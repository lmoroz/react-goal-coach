import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGoal from './AddGoal';
import { firebaseApp } from '../firebase';


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
                <h3>Goals</h3>
                <AddGoal />
                <div>Goal List</div>
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

function mapStateToProps(state) {
    console.log({state});
    return {};
}

export default connect(mapStateToProps, null)(App);
