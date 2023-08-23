import React from 'react'

import SectionCard from './SectionCard'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const InfoBar = (props) => {
  const user = useSelector((state) => state.user)
  const [is_drop, setIs_drop] = React.useState(false)
  return (
    <div className="Top-bar">
        
    <div  className="Page-title " >{props.title}</div>
    <div className='Page-info' onClick={() => setIs_drop(!is_drop)} >informações</div>
    {is_drop && <div style={{position:'absolute',top:'4vmin',right:'4vmax',zIndex:1}}><SectionCard title={'Debug'} subtitle={props.subtitle}>
    {JSON.stringify(user)}
    </SectionCard>
      </div>}
    
  </div>
  )
}

export default InfoBar