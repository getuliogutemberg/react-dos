import React from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
import InfoBar from '../components/InfoBar'
import {useNavigate} from 'react-router-dom'
import Drop   from '../components/Drop.jsx'
const Systems = () => {

  const navigate = useNavigate()

  const devices = [
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
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
    },


  ]
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    
{true && <InfoBar title={'Painel'}/>}
  <div className='Page-content'>

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
       
      <SectionCard title='Sistemas' >
        <SectionsColumns>
        <SectionsRows>
          <div style={{display:'flex',flexWrap:'wrap'}}>


          {devices.map((devices) => (
            <div key={devices.id} className='Scenario' style={{width:'15vw',cursor:'pointer'}} onClick={() => navigate('/monitoring/' + devices.id.toString())}>
            <SectionCard title={devices.title} >
              <div style={{display:'flex',flexDirection:'column'}}>
    
             
              <img src={devices.imgsrc}/>
              </div>
            </SectionCard></div>
            
            ))}
          

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

export default Systems