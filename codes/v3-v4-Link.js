import React from 'react'
import { Link } from 'react-router'

export default function UsersIndex({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={`user-${user.username}`}>
            <Link to={`/users/${user.username}`}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
      {this.props.children}
    </div>
  );
}
