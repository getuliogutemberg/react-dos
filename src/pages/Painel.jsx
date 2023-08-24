import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
import InfoBar from '../components/InfoBar'

import ScenarioCard from '../components/ScenarioCard.jsx'

const Home = () => {
  
  

  const scenarios = [
    {
      title: 'TITULO1',
      subtitle: 'SUBTITULO1',
      id: 1,
      imgsrc: 'https://picsum.photos/200/200',
    },
    {
      title: 'TITULO2',
      subtitle: 'SUBTITULO2',
      id: 2,
      imgsrc: 'https://picsum.photos/200/200',
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
    }

  ]
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    
{true && <InfoBar title={'Painel'}/>}
  <div className='Page-content'>

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
      <SectionCard title='Cenarios' >
        <SectionsColumns>
        <SectionsRows>

      <div style={{display:'flex',flexWrap:'wrap'}}>

          {scenarios.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario}/> )}
          

          </div> 
        

        </SectionsRows>

        

        </SectionsColumns>
        



      </SectionCard> 
       
      </SectionsRows>

    

      
      
      

    </SectionsColumns>   
    
   
    {false && < Help pagehelp={'/'}/>}
    

  </div>
  
  </div>
  )
}

export default Home