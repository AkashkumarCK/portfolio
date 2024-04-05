import React from 'react'
import "./EducationCard.css"
const EducationCard = ({details}) => {
  return (
    <div className='work-experience-card'>
        <h6>{details.title}</h6>
        <div className='work-duration'>{details.date}</div>
        <div className='mark'>{details.mark}</div>
    </div>
  )
}

export default EducationCard