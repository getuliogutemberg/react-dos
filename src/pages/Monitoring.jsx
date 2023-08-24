import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
import InfoBar from '../components/InfoBar'
import Drop   from '../components/Drop.jsx'
const Home = () => {
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    
{true && <InfoBar title={'Painel'}/>}
  <div className='Page-content'>

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
       
      <SectionCard title='Dispositivo' >

     <Drop/>

      <SectionsRows>
      <SectionCard title='Card 1/1' >
      Variavel Principal
      </SectionCard>
      
      </SectionsRows>

      <SectionsRows>
      <SectionCard title='Card 1/2'  >
      Variavel Secondaria
      </SectionCard>
      
      <SectionCard title='Card 1/2' >
      Variavel Terciaria
      </SectionCard>
      </SectionsRows>

      <SectionsRows>
      <SectionCard title='Card 1/3' >
        Conteudo
      </SectionCard>
      <SectionCard title='Card 1/3' >
        Conteudo
      </SectionCard>
      <SectionCard title='Card 1/3' >
        Conteudo
      </SectionCard>

      </SectionsRows>

      </SectionCard>

      

      </SectionsRows>

      
      

    </SectionsColumns>   
    
   
    {false && < Help pagehelp={'/'}/>}
    

  </div>
  
  </div>
  )
}

export default Home