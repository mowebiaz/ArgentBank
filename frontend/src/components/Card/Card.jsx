import PropTypes from 'prop-types';
import './Card.css'


export function Card({ src, alt, title, text }) {
  return (
    <div className="card-item">
      <img
        src={src}
        alt={alt}
        className="card-icon"
      />
      <h3 className="card-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
