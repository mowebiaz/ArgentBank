import { Button } from '../Button/Button'
import './HeaderConnection.css'

// ajouter le name en fonction du state
export function HeaderConnection() {
  return (
    <div className="header-connection">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Button className='edit-button' text="Edit Name" />
    </div>
  )
}
