import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';


class AddGoal extends Component {

    componentWillMount() {
        console.log('AddGoal componentWillMount this.props = ', this.props);
    }

    componentDidMount() {
        console.log('AddGoal componentDidMount this.props = ', this.props);
    }

    addGoal() {
        const { email } = this.props;
        console.log('this.props = ', this.props, email);
        goalRef.push({email, title: this.newGoalText.value});
    }

    render () {
        console.log('AddGoal render this.props = ', this.props);
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Add a goal"
                        style={{marginRight: '5px'}}
                        ref={r => { this.newGoalText = r; }}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addGoal()}
                    >Submit</button>
                </div>
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
export default connect(mapStateToProps, null)(AddGoal);

AddGoal.propTypes = {
    email: React.PropTypes.string,
};
