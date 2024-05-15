import PropTypes from 'prop-types'
import './Button.scss'

export function Button({ type, className, disabled = false, children, ...restProps }) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      {...restProps}
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
