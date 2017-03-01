import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';


class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
    }

    addGoal() {
        this.setState({title: this.newGoalText.value});
        const { email } = this.props;
        console.log('this.state = ', this.state, email);
        goalRef.push({email, title: this.newGoalText.value});
    }

    render () {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Add a goal"
                        style={{margin: '5px'}}
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

AddGoal.propTypes = {
    email: React.PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    const { email } = state;
    return {
        email
    };
}
export default connect(mapStateToProps, null)(AddGoal);
