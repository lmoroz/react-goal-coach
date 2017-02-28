import React, { Component } from 'react';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        };
    }

    render () {
        return (
            <div>App</div>
        );
    }
}


export default App;
