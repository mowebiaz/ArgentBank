import PropTypes from 'prop-types';
import './Button.css'

export function Button({ className, text }) {
  return <button className={className}>{text}</button>
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
}