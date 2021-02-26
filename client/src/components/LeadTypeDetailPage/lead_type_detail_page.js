import React from 'react'

import WebsitePageContent from '../WebsitePageContent/website_page_content'
import LeadTypeDetail from '../LeadTypeDetail/lead_type_detail'
import { LEAD_TYPES } from '../../constants/lead_types'

function LeadTypeDetailPage(props) {
  return (
    <WebsitePageContent
      heading={`${props.leadType.name} Leads - ${props.leadType.price}`}
      subheading="LEADS"
      description={`${
        props.leadType.price
      } per lead. Real-time, 100% exclusive leads. Only pay when you receive a lead. We send a text message and email to the client within seconds of them filling out an online form.`}
    >
      <div
        bp="grid container margin-top--lg padding-top--none"
        className="lr-section system-padding"
      >
        <div bp="12" className="card rounded-card lead-type-detail-card">
          <LeadTypeDetail leadType={props.leadType} hideName hidePrice hideLearnMore />
        </div>
      </div>

      <div className="lr-section lr-bg-light">
        <div bp="grid margin-bottom--lg padding-bottom--lg">
          <div bp="12 text-center">
            <h1>Other leads we offer</h1>
          </div>
        </div>

        <div bp="container padding--sm">
          <div bp="12">
            {LEAD_TYPES.length > 0
              ? LEAD_TYPES.map((leadType, i) => {
                  if (leadType.handle !== props.leadType.handle) {
                    return (
                      <div
                        key={i}
                        bp="margin-bottom--lg"
                        className="card lead-type-detail-card rounded-card system-padding"
                      >
                        <LeadTypeDetail leadType={leadType} hideDescription />
                      </div>
                    )
                  } else {
                    return ''
                  }
                })
              : ''}
          </div>
        </div>
      </div>
    </WebsitePageContent>
  )
}

export default LeadTypeDetailPage
