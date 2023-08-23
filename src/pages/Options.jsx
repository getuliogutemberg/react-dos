import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
import InfoBar from '../components/InfoBar'
const Options = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    

    {true && <InfoBar title={'Controle'}/>}
  <div className='Page-content' >

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
       
      <SectionCard title='Titulo'/>

      </SectionsRows>
      

    </SectionsColumns>   
   
    
    {false && < Help pagehelp={'/options'}/>}
    

  </div>
  
  </div>
  )
}

export default Options