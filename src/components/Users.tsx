import { ReactElement, useState } from 'react'

function handleUserProp(prop: any) {
	return typeof prop === 'object' ? JSON.stringify(prop) : prop
}

function User(props: { user: { [x: string]: any } }): ReactElement {
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

function UsersList(props: { users: { id: any }[] }): ReactElement {
	return (
		<div>{
			props.users.map((user: { id: any }) =>
				<User key={user.id} user={user} />
			)
		}</div>
	)
}

function Users(): ReactElement {
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
