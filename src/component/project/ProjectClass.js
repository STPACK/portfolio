import React from 'react'


const ProjectClass = (props) => {
    const {webLink,gitLink,imgWork,title}=props

    return (
        <div className="portfolio__content">
            <a href={webLink} target="_blank" rel="noreferrer">
              <img src={imgWork} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">
                {props.children}
              </span>
              <div>
                <a href={webLink} target="_blank" rel="noreferrer">
                  <h2 className="portfolio__title ">{title} </h2>
                </a>
                <a
                  href={gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-link"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
    )
}

export default ProjectClass

