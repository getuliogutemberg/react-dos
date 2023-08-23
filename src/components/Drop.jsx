import React from 'react'
import SectionCard from '../components/SectionCard'


const Drop = (props) => {
    const [is_drop, setIs_drop] = React.useState(false)
  return (
    <SectionCard title={<div style={{display: 'flex', flexDirection: 'row',alignItems:'center',width:'fit-content'}}>{props.title} {' '} <button className='Drop-button' onClick={() => setIs_drop(!is_drop)}>{!is_drop?'V':'X'}</button></div>} >
    <div onMouseOver={() => setIs_drop(true)} onMouseOut={() => setIs_drop(false)}>{props.subtitle}</div>
    
    {is_drop && <section onMouseOver={() => setIs_drop(true)} onMouseOut={() => setIs_drop(false)}>
      Conteudo 1
      
    </section>}
    </SectionCard>
  )
}

export default Drop