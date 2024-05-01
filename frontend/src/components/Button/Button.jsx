import PropTypes from 'prop-types';
import './Button.css'

export function Button({ type, className, text }) {
  return <button type={type} className={className}>{text}</button>
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}