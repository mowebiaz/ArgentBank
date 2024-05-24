import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { updateUserName } from '../../features/authSlice'
import './EditUserInfo.scss'
import { ErrorMessage } from '../Notifications/Notifications'

export function EditUserInfo({ setIsEditing }) {
  const { user, loading, error } = useSelector((state) => state.auth)
  const [userName, setUserName] = useState(user.userName)
  const dispatch = useDispatch()

  const handleCancel = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserName(userName))
      //message de confirmation
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
          // ou placeholder= userName du useState ?
          placeholder={user.userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          inputType="text"
          disabled={true}
          content="First name:"
          placeholder={user.firstName}
        />
        <Input
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
