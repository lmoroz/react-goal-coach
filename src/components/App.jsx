import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';


class App extends Component {

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
    const { email } = state;
    return {
        email
    };
}

export default connect(mapStateToProps, null)(App);
