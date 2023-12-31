import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {motion} from 'framer-motion'
import {styles} from '../style'
import {SectionWrapper} from '../hoc'
import { textVariant } from '../utils/motion'
import { experiences,academicsdetails } from '../constants'


const AcademicsCard = ({experience})=>{
  return (<VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
    }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyle={{ background:experience.iconBg }}
    icon ={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon} 
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'  />
      </div>
      
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {experience.title}</h3>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index)=>(
        <li key={`academics-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>  )

}

const Academics = () =>  (
    <>
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Academics</p>
      <h2 className={styles.sectionHeadText}>Educational Background</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {academicsdetails.map((experience,index)=>{
          return (<AcademicsCard key={index} experience={experience}/>)
        })}
      </VerticalTimeline>
    </div>
    </>
  )


export default SectionWrapper(Academics,"academic")