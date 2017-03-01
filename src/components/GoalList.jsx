import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals, checkGoal } from '../actions';

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
            this.props.setGoals(goals);
        });
    }


    render () {
        console.log('GoalList render this.props = ', this.props);
        const { goals } = this.props;
        return (
            <ul className="list-group">
                {
                    goals.map((goal, id) => (
                        <li key={id} className="list-group-item clearfix">
                            <span className="list-item">{goal.title}</span>
                            <button
                                className="list-item btn btn-success btn-xs pull-right"
                                style={{marginLeft: '10px'}}
                                onClick={() => checkGoal(id)}
                            > ✔ </button>
                            <div className="list-item time">
                                {
                                    // moment(new Date(reminder.dueDate))
                                    // .locale('ru')
                                    // .fromNow()
                                }
                            </div>
                        </li>))
                }
            </ul>);
    }
}

GoalList.propTypes = {
    goals: React.PropTypes.array.isRequires,
    setGoals: React.PropTypes.func.isRequired,
    checkGoal: React.PropTypes.func.isRequired,
};
function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    };
}

export default connect(mapStateToProps, { setGoals, checkGoal })(GoalList);
