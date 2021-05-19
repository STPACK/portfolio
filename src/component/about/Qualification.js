import React from 'react'

const Qualification = (props) => {
    const {title,detail,time,icon} =props
    return (
        <div className="bd-grid">
        <div className="qualification__data">
          <h3 className="qualification_area">
          {title}
          </h3>
          <div className="qualification__box">
            <span className="qualification__work">
              <i className={`${icon} qualification__icon`} ></i>
              {detail}
            </span>
            <span className="qualification__work qualification__work-time">
              <i className="bx bx-calendar qualification__icon "></i>
              {time}
            </span>
          </div>
        </div>
      </div>
    )
}

export default Qualification
