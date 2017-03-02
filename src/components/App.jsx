import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompletetedGoalList from './CompletetedGoalList';


class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App" style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', width: '50vw', margin: '0 auto', position: 'relative' } }>
        <h3>Goal Coach</h3>
        <AddGoal />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <CompletetedGoalList />
        <button className="btn btn-danger" onClick={ () => this.signOut() } style={ { position: 'fixed', top: '5px', right: '50px' } }>
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
