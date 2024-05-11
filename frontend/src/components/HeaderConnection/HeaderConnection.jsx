import { useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import './HeaderConnection.css'

// ajouter le name en fonction du state
export function HeaderConnection() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="header-connection">
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
      <Button className="edit-button">Edit Name</Button>
    </div>
  )
}
