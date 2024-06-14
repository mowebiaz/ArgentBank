import PropTypes from 'prop-types';
import './Card.scss'


export function Card({ src, alt, title, text }) {
  return (
    <div className="card__item">
      <img
        src={src}
        alt={alt}
        className="card__icon"
        height={100}
        width={100}
      />
      <h3 className="card__item-title">{title}</h3>
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
