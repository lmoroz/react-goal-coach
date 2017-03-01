import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class GoalList extends Component {

    componentWillMount() {
        console.log('GoalList componentWillMount this.props = ', this.props);
    }

    componentDidMount() {
        console.log('GoalList componentDidMount this.props = ', this.props);
        goalRef.on('value', snap => {
            const goals = [];
            snap.forEach(goal => {
                const {uid, email, title} = goal.val();
                goals.push({uid, email, title});
            });
            console.log('GoalList goals = ', goals);
        });
    }

    addGoal() {
        const { email, uid } = this.props;
        console.log('this.props = ', this.props);
        goalRef.push({uid, email, title: this.newGoalText.value});
    }

    render () {
        console.log('GoalList render this.props = ', this.props);
        return (
            <div className="list-inline">
                GoalList
            </div>

        );
    }
}

GoalList.propTypes = {
    uid: React.PropTypes.string,
    email: React.PropTypes.string,
};
function mapStateToProps(state) {
    const { email, uid } = state;
    return {
        email,
        uid
    };
}

export default connect(mapStateToProps, null)(GoalList);
