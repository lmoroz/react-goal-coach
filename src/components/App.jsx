import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';


class App extends Component {

    signOut() {
        firebaseApp.auth().signOut();
    }

    render () {
        return (
            <div
                className="App"
                style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', minHeight: '100vh', width: '50vw', margin: '0 auto'}}
            >
                <h3>Goals</h3>
                <AddGoal />
                <GoalList />
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
    console.log('App mapStateToProps state = ', state);
    return {};
}

export default connect(mapStateToProps, null)(App);
