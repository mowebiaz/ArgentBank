import PropTypes from 'prop-types'
import './Button.css'

export function Button({ type, className, disabled = false, children }) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
}
