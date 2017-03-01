import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';


class AddGoal extends Component {
    addGoal() {
        const { email, uid } = this.props;
        // console.log('AddGoal goalRef = ', goalRef);
        console.log('AddGoal this.props = ', this.props);
        goalRef.push({uid, email, title: this.newGoalText.value});
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
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.addGoal()}
                    >Submit</button>
                </div>
            </div>

        );
    }
}

AddGoal.propTypes = {
    uid: React.PropTypes.string,
    email: React.PropTypes.string,
};
function mapStateToProps(state) {
    const { email, uid } = state.user;
    return {
        email,
        uid
    };
}
export default connect(mapStateToProps, null)(AddGoal);
