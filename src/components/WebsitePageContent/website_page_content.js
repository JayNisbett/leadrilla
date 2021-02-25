import React from 'react'

function WebsitePageContent(props) {
  return (
    <div className="WebsitePageContent">
      {!props.noHeader ? (
        <div className="page-header">
          {props.banner ? (
            <div bp="grid" className="system-padding">
              <div bp="12">
                <div className="page-banner">{props.banner}</div>
              </div>
            </div>
          ) : null}
          <div bp={props.centerHeading ? 'grid text-center' : 'grid'} className="system-padding">
            <div bp={props.contentRight ? '12 6@md' : '12'}>
              <div bp="grid">
                {props.heading || props.subheading ? (
                  <div bp="12">
                    {props.subheading ? (
                      <h2 bp="margin-bottom--sm" className="page-subheading">
                        {props.subheading}
                      </h2>
                    ) : (
                      ''
                    )}
                    {props.heading ? (
                      <h1 className="lr-jumbo-txt page-heading">{props.heading}</h1>
                    ) : (
                      ''
                    )}
                  </div>
                ) : (
                  ''
                )}
                {props.description ? (
                  <div bp="12">
                    <p>{props.description}</p>
                  </div>
                ) : (
                  ''
                )}
                {props.ctaElement ? <div bp="12">{props.ctaElement}</div> : ''}
              </div>
            </div>
            {props.contentRight ? <div bp="12 6@md">{props.children}</div> : ''}
          </div>
        </div>
      ) : (
        ''
      )}

      {!props.contentRight ? <div className="page-content">{props.children}</div> : ''}
    </div>
  )
}

export default WebsitePageContent
