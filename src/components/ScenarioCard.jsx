import React from 'react'
import {useNavigate} from 'react-router-dom'
import SectionCard from '../components/SectionCard'

const ScenarioCard = (props) => {
    const navigate = useNavigate()
    const [is_drop, setIs_drop] = React.useState(false)
    return <div className='Scenario' style={{width:'15vw',cursor:'pointer'}} onClick={() => navigate('/systems/' + props.scenario.id.toString())}>
    <SectionCard title={props.scenario.title}  >
      <div style={{display:'flex',flexDirection:'column'}} onMouseOver={() => setIs_drop(true)} onMouseOut={() => setIs_drop(false)}>

     
      <img src={props.scenario.imgsrc} alt={props.scenario.title}/>
      {is_drop && <p>{props.scenario.subtitle}</p>}
      </div>
    </SectionCard></div>
}

export default ScenarioCard