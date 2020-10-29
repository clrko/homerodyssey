import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'mon@email.com',
            password: 'monpassword',
            passwordbis: 'monpasswordbis',
            name: 'James',
            lastname: 'Bond'
        }
        this.updateEmailField = this.updateEmailField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateEmailField(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit() {
        console.log('A name ws submitted:', this.state)
    }

    render() {
        return (
            <div>
                <h1>{JSON.stringify(this.state,1,1)}</h1>
                <form  onSubmit={this.handleSubmit}>
                    <input type='email' name='email' onChange={this.updateEmailField} value={this.state.email} />
                    <input type='password' name='password' onChange={this.updateEmailField} value={this.state.password} />
                    <input type='password' name='passwordbis' onChange={this.updateEmailField} value={this.state.passwordbis} />
                    <input type='text' name='name' onChange={this.updateEmailField} value={this.state.name} />
                    <input type='text' name='lastname' onChange={this.updateEmailField} value={this.state.lastname} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default SignUp
