import React from 'react'

const Motivecards = ({cardimg, title, des}) => {
  return (
    <div className='CardMtv'>
        <img src={cardimg} alt="Card_Img" />
        <h3>{title}</h3>
        <p>{des}</p>
    </div>
  )
}

export default Motivecards