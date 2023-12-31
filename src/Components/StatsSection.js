import React from 'react'
import Icon1 from '../assets/icons/Group1000002515.svg'
import Icon2 from '../assets/icons/Group1000002516.svg'
import Icon3 from '../assets/icons/Group1000002518.svg'
const StatsSection = () => {
  return (
    <div className='Statsstn'>
        <div className="flexbox">
          <div><img src={Icon1} alt="Icon1" /> </div>
          <div>
          <h2>100K+</h2>
            <p>AI Model Submission</p>
          </div>
          
        </div>
        <div className="flexbox" id="SndStats">
          <div><img src={Icon2} alt="Icon2" /></div>
          <div>
          <h2>50K+</h2>
            <p>Data Scientist</p>
          </div>
        </div>
        <div className="flexbox">
          <div><img src={Icon3} alt="Icon3" /></div>
          <div>
          <h2>100+</h2>
            <p>AI Challanges Hosted</p>
          </div>
          
        </div>
    </div>
  )
}

export default StatsSection