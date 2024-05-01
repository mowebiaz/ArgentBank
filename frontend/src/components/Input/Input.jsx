import PropTypes from 'prop-types'
import './Input.css'

export function Input({
  className,
  label,
  inputType,
  disabled = false,
  content,
  labelFirst = true,
  ...restProps
}) {
  const labelEl = <label htmlFor={label}>{content}</label>
  const inputEl = (
    <input
      type={inputType}
      id={label}
      disabled={disabled}
      {...restProps}
    />
  )
  return (
    <div className={className}>
      {labelFirst ? (
        <>
          {labelEl}
          {inputEl}
        </>
      ) : (
        <>
          {inputEl}
          {labelEl}
        </>
      )}
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  content: PropTypes.string,
  labelFirst: PropTypes.bool,
}
