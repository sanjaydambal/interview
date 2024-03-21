import React from 'react'

const DisplayNames = () => {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];
      
  return (
    <div>
      <h1>User Names</h1>
      <ul>
        {
            users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default DisplayNames
