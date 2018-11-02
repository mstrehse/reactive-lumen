import React from "react"
import { Redirect } from 'react-router'

class Login extends React.Component {

	constructor(props) {
    super(props)
    this.state = {
			email: '',
			password: '',
			success: null
		}

    this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

	handleEmailChange(event) {
		this.setState({email: event.target.value})
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value})
	}

	handleSubmit(event) {

		event.preventDefault()
		console.log('A name was submitted: ' + this.state.email+' - '+this.state.password)

		// validaton logic
		if(this.state.email == 'info@example.com' && this.state.password == '123'){
			this.setState({
				success: true
			})
		}else{
			this.setState({
				success: false,
				password: ''
			})
		}
	}

	render() {

		let redirect
		let errors

		if(this.state.success){
			redirect = (<Redirect to="/" />)
		}

		if(this.state.success === false){
			errors = (
				<div className="errors">
					<p>The login you provided is not valid.</p>
				</div>
			)
		}

		return (
			<form onSubmit={this.handleSubmit}>
				{redirect}
				{errors}
				<label>
					Email:
					<input type="text" value={this.state.email} onChange={this.handleEmailChange} />
				</label>
				<label>
					Password:
					<input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Login
