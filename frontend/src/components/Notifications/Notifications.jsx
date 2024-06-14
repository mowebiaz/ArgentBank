import PropTypes from 'prop-types'
import './Notifications.scss'

export const ErrorMessage = ({ children }) => {
  return <div className="error">{children}</div>
}

export const LoadingMessage = ({ children }) => {
  return <div className="loading">{children}</div>
}

ErrorMessage.propTypes = {
  children: PropTypes.node,
}

LoadingMessage.propTypes = {
  children: PropTypes.node,
}
