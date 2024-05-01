import { Button } from '../Button/Button'
import './HeaderConnection.css'

// ajouter le name en fonction du state
export function HeaderConnection() {
  return (
    <div className="header-connection">
      <h1>
        Welcome back
        <br />
        {/*         nom en fonction de l'utilsateur connecté
         */}
        Tony Jarvis!
      </h1>
      {/*       appeler le formulaire au clic sur le bouton
       */}
      <Button
        className="edit-button"
        text="Edit Name"
      />
    </div>
  )
}
