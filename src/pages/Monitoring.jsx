import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
import InfoBar from '../components/InfoBar'
import Drop   from '../components/Drop.jsx'
import { useParams } from 'react-router-dom'
const Monitoring = () => {
  const parametros = useParams();
  const [device, setDevice] = React.useState({})

  const fakeFetch = [
    {
      title: 'TITULO1',
      subtitle: 'SUBTITULO1',
      id: 1,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 1,
      drop:'drop1'
    },
    {
      title: 'TITULO2',
      subtitle: 'SUBTITULO2',
      id: 2,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 1
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 2
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 2
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 2
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 3
    },
    {
      title: 'TITULO3',
      subtitle: 'SUBTITULO3',
      id: 3,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 3
    },


  ]

  useEffect(() => {
    setDevice(fakeFetch.find((device)=> device.id == parametros.id))
  },[parametros.id])
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    
{true && <InfoBar title={'Painel'}/>}
  <div className='Page-content'>

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
       
      <SectionCard title={device.title} >

     {device.drop && <Drop title={'Drops'} subtitle={device.subtitle}>
      {device.drop}
     </Drop>}

      <SectionsRows>
      <SectionCard title='Nome' >
     {device.title}
      </SectionCard>
      
      </SectionsRows>

      <SectionsRows>
      <SectionCard title='Descrição'  >
      {device.subtitle}
      </SectionCard>
      
      <SectionCard title='Imagem' >
      <img src={device.imgsrc} alt={device.title}/>
      </SectionCard>
      </SectionsRows>

      <SectionsRows>
      <SectionCard title='Cenario' >
        {device.scenario_id}
      </SectionCard>
      <SectionCard title='Sistema' >
        {device.scenario_id}
      </SectionCard>
      <SectionCard title='Data' >
        {new Date().toLocaleString()}
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

export default Monitoring