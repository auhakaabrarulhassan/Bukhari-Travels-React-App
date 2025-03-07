import React from 'react';
import "../TimeBar/TimeBar.css";

function TimeBar() {
  return (
    <div className="timig-bar">
    <div className="container">
      <div className="row">
        <div className="time-bar col-lg-12 col-md-12 col-sm-12">
          <i className="fa-solid fa-clock edit-icon me-2" />
          <p className="open-hours-edit">Open Hours: Mon-Fri 8:00 am - 6:00 pm</p>
          <p>
            <span className="bold-text"> (Pakistan Standard Time)</span>
          </p>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default TimeBar
