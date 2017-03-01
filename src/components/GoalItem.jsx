import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completedGoalRef } from '../firebase';


class GoalItem extends Component {

    checkGoal() {
        // add to complete goals in the database
        // remove this goal from goals ref
        const { uid, email, goal } = this.props;
        completedGoalRef.push({uid, email, title: goal.title});
        goalRef.child(goal.serverKey).remove();
    }

    render() {
        return (
            <li className="list-group-item clearfix">
                <span className="list-item">{this.props.goal.title}</span>
                <button
                    className="list-item btn btn-success btn-xs pull-right"
                    style={{marginLeft: '10px'}}
                    onClick={() => this.checkGoal()}
                > Complete ✔ </button>
                <div className="list-item text-muted small">
                    submitted by {this.props.goal.email}
                </div>
            </li>
        );
    }
}

GoalItem.propTypes = {
    goal: React.PropTypes.object.isRequired,
    uid: React.PropTypes.string,
    email: React.PropTypes.string,
    // checkGoal: React.PropTypes.func.isRequired,
};
function mapStateToProps(state) {
    const { uid, email } = state.user;
    return {
        uid,
        email
    };
}

export default connect(mapStateToProps, null)(GoalItem);
