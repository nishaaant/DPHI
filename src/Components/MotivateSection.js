import React from 'react'
import Motivecards from './Motivecards'
import Notebk from '../assets/icons/carbon_notebook-reference.svg'
import People from '../assets/icons/Vector.svg'
import Robot from '../assets/icons/Robot.svg'
import IdCard from '../assets/icons/IdentificationCard.svg'
const MotivateSection = () => {
  return (
    <div className='Motivatestn'>
        <h2>Why Participate in <span>AI Challenges?</span></h2>
        <div className='MotiveSndStn'>
           
            <Motivecards cardimg = {Notebk} title= 'Prove your skills' des="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."/>
            <Motivecards cardimg={People} title= 'Learn from Community'des="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."/>
            <Motivecards cardimg={Robot} title= 'Challenge yourself' des="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."/>
            <Motivecards cardimg={IdCard} title= 'Earn recognition' des="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."/>
        </div>
    </div>
  )
}

export default MotivateSection