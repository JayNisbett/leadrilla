import React from 'react'
import { useForm, required } from '../../hooks/form'

function LeadSoldEntry(props) {
  const { fieldProps, values, errors, allValid, setValues } = useForm({
    total_sale_amount: { validations: [required] },
    commission_made: { validations: [required] }
  })

  const handleSubmit = async e => {
    e.preventDefault()
    if (allValid()) {
      props.close()
      props.onEntry(values.total_sale_amount, values.commission_made)
      setValues({
        total_sale_amount: '',
        commission_made: ''
      })
    }
  }

  const close = async e => {
    e.preventDefault()
    setValues({
      total_sale_amount: '',
      commission_made: ''
    })
    props.close()
  }

  return (
    <div className="">
      <form>
        <div bp="grid margin-bottom--sm">
          <div bp="12">
            {props.verticalId === 1 ? (
              <p className="small">
                To mark this lead as a sale, please enter the total annual premium amount for all
                policies sold to this lead. This will help liveleads improve the quality of any
                future leads you may purchase and provide detailed analytics to you as you use the
                platform.
              </p>
            ) : (
              <p className="small">
                To mark this lead as a sale, please enter the total dollar value of the project.
                This will help liveleads improve the quality of any future leads you may purchase
                and provide detailed analytics to you as you use the platform.
              </p>
            )}
          </div>
        </div>
        <div bp="grid margin-bottom--sm">
          <div bp="12">
            <p className="error-message">{errors.total_sale_amount}</p>
            <label>Total Sale Amount</label>
            <input type="number" {...fieldProps.total_sale_amount} className="input-light" />
          </div>
          <div bp="12">
            <p className="error-message">{errors.commission_made}</p>
            <label>Commission Made</label>
            <input type="number" {...fieldProps.commission_made} className="input-light" />
          </div>
        </div>
        <div bp="grid">
          <div bp="5">
            <button bp="margin-top--sm" onClick={close} className="btn btn-block btn-grey">
              Cancel
            </button>
          </div>
          <div bp="7">
            <button
              type="submit"
              bp="margin-top--sm"
              className="btn btn-block btn-blue"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LeadSoldEntry
