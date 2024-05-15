import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
<<<<<<< HEAD
import { updateUserName } from '../../features/authSlice'
import './EditUserInfo.css'
=======
import './EditUserInfo.scss'
>>>>>>> 2a80708 (replace css with scss)

export function EditUserInfo({ setIsEditing }) {
  const { user } = useSelector((state) => state.auth)
  const [userName, setUserName] = useState(user.userName)
  const dispatch = useDispatch()

  const handleCancel = (e) => {
    e.preventDefault()
    setIsEditing(false)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      //await dispatch(updateUserName(userName)).unwrap()
      dispatch(updateUserName(userName))
      //message de confirmation
      setIsEditing(false)
    } catch (error) {
      console.log(error.message || 'Failed to update username');
      // Gérer l'erreur
    }

  }
  return (
    <>
      <h1>Edit user info</h1>
      <form onSubmit={handleSave}>
        <Input
          // className="input-wrapper"
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
        {/*         {error && <div className="error">{error}</div>}
         */}
        <Button type="submit">Save</Button>
        <Button
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </form>
    </>
  )
}

EditUserInfo.propTypes = {
  setIsEditing: PropTypes.func,
}
