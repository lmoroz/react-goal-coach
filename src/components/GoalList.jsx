import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {

    componentDidMount() {
        goalRef.on('value', snap => {
            const goals = [];
            snap.forEach(goal => {
                const {uid, email, title} = goal.val();
                goals.push({uid, email, title, serverKey: goal.key});
            });
            console.log('GoalList goals = ', goals);
            this.props.setGoals(goals);
        });
    }


    render () {
        const { goals } = this.props;
        return (
            <ul className="list-group">
                {
                    goals.map((goal, id) =>
                        <GoalItem key={id} goal={goal} />
                    )
                }
            </ul>);
    }
}

GoalList.propTypes = {
    goals: React.PropTypes.array.isRequired,
    setGoals: React.PropTypes.func.isRequired,
};
function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    };
}

export default connect(mapStateToProps, { setGoals })(GoalList);
