import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
    if(loggedIn) {
        if(isAdmin) {
            return <p>Welcome Admin</p>
        }
        return <p>Welcome User</p>
    }

    return <p>Nobody</p>
       
}

export default UserStatus