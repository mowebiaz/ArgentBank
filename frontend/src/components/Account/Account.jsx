import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import './Account.scss'
export function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account__content-wrapper">
        <h3 className="account__title">{title}</h3>
        <p className="account__amount">{amount}</p>
        <p className="account__amount-description">{description}</p>
      </div>
      <div className="account__content-wrapper cta">
        <Button
          className="transaction-button"
          >
            View transactions
          </Button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string,
}
