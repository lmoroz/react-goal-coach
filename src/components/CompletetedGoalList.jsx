import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completedGoalRef } from '../firebase';
import { setCompletedGoals } from '../actions';

class CompletetedGoalList extends Component {

    componentDidMount() {
        completedGoalRef.on('value', snap => {
            const completedGoals = [];
            snap.forEach(goal => {
                const {uid, email, title} = goal.val();
                completedGoals.push({uid, email, title, serverKey: goal.key});
            });
            console.log('CompletetedGoalList goals = ', completedGoals);
            this.props.setCompletedGoals(completedGoals);
        });
    }


    render () {
        const { completedGoals } = this.props;
        return (
            <ul className="list-group">
                {
                    completedGoals.map((goal, id) =>
                        <li key={id} className="list-group-item clearfix">
                            <span className="list-item">{goal.title}</span>
                            <div className="list-item text-muted small">
                                completed by {goal.email}
                            </div>
                        </li>
                    )
                }
            </ul>);
    }
}

CompletetedGoalList.propTypes = {
    completedGoals: React.PropTypes.array.isRequired,
    setCompletedGoals: React.PropTypes.func.isRequired,
};
function mapStateToProps(state) {
    const { completedGoals } = state;
    return {
        completedGoals
    };
}

export default connect(mapStateToProps, { setCompletedGoals })(CompletetedGoalList);
