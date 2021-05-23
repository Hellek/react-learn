import { useState } from 'react'

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

function Users() {
	const [users, setUsers] = useState([])
	const [usersLoading, setUsersLoading] = useState(false)

	const fetchUsers = async () => {
		return await (await fetch('http://jsonplaceholder.typicode.com/users')).json()
	}

	const setFetchedUsers = async () => {
		setUsersLoading(true)
		setUsers(await fetchUsers())
		setUsersLoading(false)
	}

	return (
		<fieldset>
			<legend>Users async fetch</legend>

			{(!users.length && !usersLoading) &&
				<button
					onClick={setFetchedUsers}
					disabled={usersLoading}
				>Get users</button>
			}

			{usersLoading && <div>Загрузка...</div>}

			<UsersList users={users}/>
		</fieldset>
	)
}

export default Users
