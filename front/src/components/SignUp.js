import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.updateEmailField = this.updateEmailField.bind(this)
    }

    updateEmailField(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <input type='email' name='email' onChange={this.updateEmailField} value={this.state.value}/>
            </div>
        )
    }
}

export default SignUp
