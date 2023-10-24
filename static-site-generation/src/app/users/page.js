import Link from 'next/link';
import getUsers from '../../../services/getUsers'
import React from 'react'

const Users = async () => {
    const getUserList = await getUsers();
    console.log("getUserList---", getUserList.length)
    return (
        <div>
            <h1>USERS</h1>
            {
                getUserList.map((user) => {
                    return (
                        <h2 key={user.id}>
                            <Link href={`/users/`+user.id}>{user.name}</Link>
                        </h2>
                    )
                })
            }
        </div>
    )
}

export default Users