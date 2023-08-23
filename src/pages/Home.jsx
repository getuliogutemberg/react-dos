import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    <div className="Top-bar">
        
    <div  className="Page-title " >Titulo da pagina</div>
    <div className='Page-info' onClick={() => alert('informações')}>informações</div>
  </div>

  <div className='Page-content'>

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
       
      <SectionCard title='Titulo'/>

      </SectionsRows>
      

    </SectionsColumns>   
   
    {false && < Help/>}
    

  </div>
  
  </div>
  )
}

export default Home