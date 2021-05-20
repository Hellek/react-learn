import React from 'react'

function handleUserProp(prop) {
	return typeof prop === 'object' ? JSON.stringify(prop) : prop
}

function User(props) {
	return (
		<div style={{ marginBottom: '20px' }}>{
			Object.keys(props.user).map((propName, i) => {
				return <div
					key={i}
				>{propName}: {handleUserProp(props.user[propName])}</div>
			})
		}</div>
	)
}

function UsersList(props) {
	return (
		<div>{
			props.users.map(user =>
				<User key={user.id} user={user} />
			)
		}</div>
	)
}

class Users extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			users: [],
			usersLoading: false,
		}
	}

	getUsers = async () => {
		const res = await fetch('http://jsonplaceholder.typicode.com/users')
		return await res.json()
	}

	setUsers = async () => {
		this.setState({ usersLoading: true })
		const users = await this.getUsers()
		this.setState({ users, usersLoading: false })
	}

	render() {
		return (
			<div>
				<button
					onClick={this.setUsers}
					disabled={this.usersLoading}
				>Get users</button>

				<UsersList users={this.state.users}/>
			</div>
		)
	}
}

export default Users
