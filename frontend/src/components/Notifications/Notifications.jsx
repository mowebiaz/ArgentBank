import PropTypes from 'prop-types'
import './Notifications.scss'

export const ErrorMessage = ({ children }) => {
  return <div className="error">{children}</div>
}

ErrorMessage.propTypes = {
  children: PropTypes.node,
}
