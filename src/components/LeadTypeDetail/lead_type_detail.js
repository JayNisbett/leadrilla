import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'

import iconBlueCheck from '../../assets/svg/icon-blue-check.svg'
import { UserContext } from '../AuthProvider/auth_provider'

/**
 * Prop options:
 *
 * leadType (object - from LEAD_TYPES constants file)
 * hideName (boolean)
 * hidePrice (boolean)
 * hideDescription (boolean)
 * hideBullets (boolean)
 * hideCta (boolean)
 * hideLearnMore (boolean)
 *
 * all of the booleans are optional. only pass in true to hide any of them
 */
function LeadTypeDetail(props) {
  const { user } = useContext(UserContext)

  return (
    <div className="LeadTypeDetail">
      {!props.hideName && !props.hidePrice ? (
        <div bp="grid margin-bottom--sm">
          <div bp="12">
            <h2>
              {!props.hideName ? <span>{props.leadType.name}</span> : ''}
              {!props.hidePrice ? <span> - {props.leadType.price}</span> : ''}
            </h2>
          </div>
        </div>
      ) : (
        ''
      )}

      <div bp="grid">
        <div bp="12 8@sm offset-3@sm 4@md 3@lg last@md">
          {!props.hideImages
            ? props.leadType.images.map((image, i) => {
                return (
                  <div bp="margin-bottom" key={i}>
                    {image}
                  </div>
                )
              })
            : ''}
        </div>

        <div bp="12 8@md 9@lg">
          <div bp="grid margin-bottom--sm">
            <div bp="12">
              {!props.hideDescription ? props.leadType.description : ''}
              {!props.hideBullets ? (
                <div bp="margin-bottom" className="lead-type-bullets">
                  {props.leadType.bullets.map((bullet, i) => {
                    return (
                      <div bp="margin-bottom--sm" className="lead-type-bullet" key={i}>
                        <div className="lead-type-bullet-icon" bp="margin-right--sm">
                          <SVG src={iconBlueCheck} />
                        </div>
                        <div className="lead-type-bullet-text">{bullet}</div>
                        <div className="clear" />
                      </div>
                    )
                  })}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div bp="grid">
            <div bp="12">
              {!props.hideCta ? (
                !user ? (
                  <Link to="/signup" className="btn btn-blue btn-lg" bp="margin-right">
                    Start receiving leads
                  </Link>
                ) : (
                  <Link
                    to="/dash/lead-feeds/create"
                    className="btn btn-blue btn-lg"
                    bp="margin-right"
                  >
                    Start receiving leads
                  </Link>
                )
              ) : (
                ''
              )}
              {!props.hideLearnMore ? (
                <Link to={`/leads/${props.leadType.handle}`} className="lr-large-text">
                  Learn more
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>

      <div bp="grid" />
    </div>
  )
}

export default LeadTypeDetail
