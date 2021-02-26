import { useState } from 'react'
import classnames from 'classnames'
import checkIsEmail from 'is-email'
import { mapValues, constant, forEach, isNil } from 'lodash'

export const useForm = (fields, options = {}) => {
  const defaultState = mapValues(fields, ({ defaultValue }) => defaultValue || '')
  const [values, setValues] = useState(defaultState)

  const defaultErrors = mapValues(fields, constant(''))
  const [errors, setErrors] = useState(defaultErrors)

  const validateField = (value, key, setError = true) => {
    for (const validation of fields[key].validations) {
      const [isValid, error] = validation(value, values)

      if (!isValid) {
        if (setError) {
          setErrors({ ...errors, [key]: error })
        }

        return [false, error]
      }
    }

    if (setError) {
      setErrors({ ...errors, [key]: '' })
    }

    return [true, '']
  }

  const fieldProps = mapValues(fields, (field, key) => {
    let value = values[key]

    if (isNil(value) && !isNil(fields[key].defaultValue)) {
      value = fields[key].defaultValue
    } else if (isNil(value)) {
      value = field.type === 'select' ? 'default' : ''
    }

    return {
      name: key,
      id: key,
      value,
      disabled: fields[key].disabled || undefined,
      className: classnames({ 'has-error': errors[key], 'input-light': options.light }),
      onBlur: ({ target: { id, value } }) => (value ? validateField(value, id) : null),
      onChange: ({ target: { id, value, checked } }) => {
        validateField(value, id)

        if (fields[id].type === 'checkbox') {
          value = checked
        }

        if (fields[id].type === 'number') {
          value = Number(value)
        }

        if (fields[key].formatter) {
          value = fields[key].formatter(value)
        }

        setValues({ ...values, [id]: value })
      }
    }
  })

  const allValid = () => {
    let allValid = true
    const errors = {}

    forEach(values, (value, key) => {
      const [valid, error] = validateField(value, key, false)
      if (!valid) {
        allValid = false
        errors[key] = error
      } else {
        errors[key] = ''
      }
    })

    setErrors(errors)

    return allValid
  }

  return { fieldProps, values, errors, allValid, setValues, setErrors }
}

export const required = value => [
  !!value.toString().trim() && value !== 'default',
  'Required field'
]

export const isEmail = value => [checkIsEmail(value), 'Invalid email address']

export const isPhone = value => [value.replace(/[^\d]/g, '').length === 10, 'Invalid phone #']

export const none = () => [true]
