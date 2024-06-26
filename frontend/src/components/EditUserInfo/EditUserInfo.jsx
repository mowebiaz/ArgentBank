import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { ErrorMessage } from '../Notifications/Notifications'
import { updateUserName } from '../../features/userSlice'
import './EditUserInfo.scss'

export function EditUserInfo({ setIsEditing }) {
  const { user, error } = useSelector((state) => state.user)
  const [userName, setUserName] = useState(user.userName)
  const dispatch = useDispatch()

  const handleCancel = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateUserName(userName)).unwrap()
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update username', error)
    }
  }
  return (
    <section className="edit-userName">
      <h1>Edit user info</h1>
      <form onSubmit={handleSave}>
        <Input
          label="userName"
          inputType="text"
          content="User name:"
          placeholder={user.userName}
          autoComplete="username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          label="firstName"
          inputType="text"
          disabled={true}
          content="First name:"
          placeholder={user.firstName}
        />
        <Input
          label="lastName"
          inputType="text"
          disabled={true}
          content="Last name:"
          placeholder={user.lastName}
        />
        {error && <ErrorMessage>Failed to update username</ErrorMessage>}
        <div className="div-buttons">
          <Button
            className="edit-button"
            type="submit"
          >
            Save
          </Button>
          <Button
            className="edit-button"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </section>
  )
}

EditUserInfo.propTypes = {
  setIsEditing: PropTypes.func,
}
