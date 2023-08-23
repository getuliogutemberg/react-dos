import React from 'react'
import SectionCard from '../components/SectionCard'


const Drop = () => {
    const [is_drop, setIs_drop] = React.useState(false)
  return (
    <SectionCard title={<div style={{display: 'flex', flexDirection: 'row',alignItems:'center',width:'fit-content'}}>Drop 1/1 <button className='Drop-button' onClick={() => setIs_drop(!is_drop)}>V</button></div>} >
    <div onMouseOver={() => setIs_drop(true)} onMouseOut={() => setIs_drop(false)}>Drop</div>
    
    {is_drop && <section onMouseOver={() => setIs_drop(true)} onMouseOut={() => setIs_drop(false)}>
      Conteudo 1
      
    </section>}
    </SectionCard>
  )
}

export default Drop