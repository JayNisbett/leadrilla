import React from 'react';

export default function Onboarding() {
  return (
    <>
      <div bp="grid" className="lead-feed-creation">

        <h1 bp="12 6@lg offset-4@lg margin--none">Create Lead Feed</h1>
        <hr bp="12 6@lg offset-4@lg" />
        <div bp="12 6@lg offset-4@lg" className="step visible">
          <div bp="grid gap-none">
            <h3 bp="6" className="lead-feed-creation-step-header">1. Industry</h3>
            <button bp="6 text-right" className="btn-link edit">Edit</button>
            <p bp="6 margin--none" className="blue-text bold">Life Insurance</p>
          </div>
        </div>
        <div bp="12 6@lg offset-4@lg" className="step">
          <div bp="grid gap-none">
            <h3 bp="6" className="lead-feed-creation-step-header">2. State</h3>
            <button bp="6 text-right" className="btn-link edit">Edit</button>
          </div>
        </div>
        <div bp="12 6@lg offset-4@lg" className="step active visible">
          <div bp="grid gap-none">
            <h3 bp="6" className="lead-feed-creation-step-header">2. Select product</h3>
            <form bp="12" className="transparent-form options">
              <div className="product-option">
                <input type="radio" id="product-6" name="productId" />
                <label htmlFor="product-6" className="">Final Expense Pro - $30</label>
                <p className="info bold">?</p>
              </div>
              <div className="product-option">
                <input type="radio" id="product-11" name="productId" />
                <label htmlFor="product-11" className="">FX Pro (2021 BETA) - $30</label>
                <p className="info bold">?</p>
              </div>
              <div className="product-option">
                <input type="radio" id="product-5" name="productId" />
                <label htmlFor="product-5" className="">Final Expense - $20</label>
                <p className="info bold">?</p>
              </div>
              <div className="product-option">
                <input type="radio" id="product-7" name="productId" />
                <label htmlFor="product-7" className="">Spanish Final Expense - $25</label>
                <p className="info bold">?</p>
              </div>
              <div className="product-option">
                <input type="radio" id="product-1" name="productId" />
                <label htmlFor="product-1" className="">Mortgage Protection - $36</label>
                <p className="info bold">?</p>
              </div>
              <div className="product-option">
                <input type="radio" id="product-4" name="productId" />
                <label htmlFor="product-4" className="">Agent Hiring - $17</label>
                <p className="info bold">?</p>
              </div>
            </form>
          </div>
        </div><div bp="12 6@lg offset-4@lg" className="step">
          <div bp="grid gap-none">
            <h3 bp="6" className="lead-feed-creation-step-header">3. Location</h3>
            <button bp="6 text-right" className="btn-link edit">Edit</button>
            <p bp="12 margin--none" className="red-text bold">Please select where you want to receive leads</p>
          </div>
        </div>
        <div bp="12 6@lg offset-4@lg" className="step">
          <div bp="grid gap-none">
            <h3 bp="6" className="lead-feed-creation-step-header">4. Leads per week</h3>
            <button bp="6 text-right" className="btn-link edit">Edit</button>
            <p bp="12 margin--none" className="blue-text bold">25</p>
          </div>
        </div>
        <div bp="12 6@lg offset-4@lg" className="step">
          <div bp="grid gap-none">
            <h3 bp="6" className="lead-feed-creation-step-header">5. Payment</h3>
            <button bp="6 text-right" className="btn-link edit">Edit</button>
            <p bp="12 margin--none" className="red-text bold">Please select a payment method</p>
          </div>
        </div>
      </div>
    </>
  )
}