
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { EditUserInfo } from '../EditUserInfo/EditUserInfo'
import './HeaderProfile.scss'


export function HeaderProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const { user } = useSelector((state) => state.user)

  const handleEdit = (e) => {
    e.preventDefault()
    setIsEditing(!isEditing)
  }

  return (
    <div className="header-profile">
      {isEditing ? (
        <EditUserInfo setIsEditing={setIsEditing}/>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {user && user.firstName} {user && user.lastName}!
          </h1>
          <Button
            className="edit-button"
            onClick={handleEdit}
          >
            Edit Name
          </Button>
        </>
      )}
    </div>
  )
}
