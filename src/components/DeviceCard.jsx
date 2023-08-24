import React from 'react'
import {useNavigate} from 'react-router-dom'
import SectionCard from './SectionCard'

const DeviceCard = (props) => {
    const navigate = useNavigate()
    const [is_drop, setIs_drop] = React.useState(false)
    return <div className='Scenario' style={{width:'15vw',cursor:'pointer'}} onClick={() => navigate('/monitoring/' + props.device.id.toString())}>
    <SectionCard title={props.device.title}  >
      <div style={{display:'flex',flexDirection:'column'}} onMouseOver={() => setIs_drop(true)} onMouseOut={() => setIs_drop(false)}>

     
      <img src={props.device.imgsrc} alt={props.device.title}/>
      {is_drop && <p>{props.device.subtitle}</p>}
      </div>
    </SectionCard></div>
}

export default DeviceCard