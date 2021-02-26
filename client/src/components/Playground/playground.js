import React, { useState } from 'react'
import logo from '../../assets/svg/liveleads-icon-black.svg'
import Loader from '../Loader/loader'
import jsPdf from 'jspdf'
import { saveAs } from 'file-saver'
import Modal from '../Modal/modal'
import LeadSoldEntry from '../LeadSoldEntry/lead_sold_entry'

function Playground() {
  const downloadPdf = () => {
    var doc = new jsPdf()
    doc.text("It's a lead!", 10, 10)
    saveAs(doc.output('blob'), 'lead.pdf')
  }

  const [showModal, setShowModal] = useState(true)
  const saveAmount = async amount => {
    alert('User entered annual premium sold amount. Save it. ' + amount)
  }

  return (
    <div className="Playground">
      <div bp="grid padding">
        <div bp="4 offset-5 text-center">
          <img className="logo-light" src={logo} alt="logo" />
        </div>
      </div>

      <div bp="grid padding container">
        <h1 bp="12">This is a primary header.</h1>
        <div bp="12 4@md">
          <div className="card" bp="full-width">
            <h2>Secondary header used for card titles</h2>
            <p>The standard p text used for most card text.</p>
            <h3>An h3 header, used for sub-sections within cards.</h3>
            <p className="lr-small-text">
              And some small text which is achieved by the 'lr-small-text' class and used for less
              important things or disclaimers
            </p>
          </div>
        </div>

        <div bp="12 8@sm 4@md">
          <div className="card" bp="full-width">
            <h2>Inline loader</h2>
            <p>
              <Loader size="16" inline loading colors={{ singleColor: '#000000' }} />
              Hello this is an inline loader
            </p>
          </div>
        </div>

        <div bp="12 8@sm 4@md">
          <div className="card" bp="full-width">
            <button onClick={downloadPdf} className="btn btn-primary">
              Download Lead PDF
            </button>
            <h2>Modal</h2>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                setShowModal(true)
              }}
            >
              Show modal
            </button>
            <Modal
              title="Record new sale"
              show={showModal}
              close={() => {
                setShowModal(false)
              }}
            >
              <LeadSoldEntry
                onEntry={saveAmount}
                close={() => {
                  setShowModal(false)
                }}
              />
            </Modal>
          </div>
        </div>

        <div bp="12 8@sm 4@md">
          <div className="card" bp="full-width">
            <h2>Box loader</h2>
            <Loader loading />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playground
