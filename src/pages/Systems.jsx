import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import SectionCard from '../components/SectionCard'
import SectionsRows from '../components/SectionsRows.jsx'
import SectionsColumns from '../components/SectionsColumns.jsx'
import Help from '../components/Help.jsx'
import InfoBar from '../components/InfoBar'
import {useParams} from 'react-router-dom'
import DeviceCard from '../components/DeviceCard'

const Systems = () => {

  const parametros = useParams();

  // const navigate = useNavigate()

  const fakeFetch = [
    {
      title: 'TITULO1',
      subtitle: 'SUBTITULO1',
      id: 1,
      imgsrc: 'https://picsum.photos/200/200',
      scenario_id: 1
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

    setDevices(() => fakeFetch.filter((element) => element.scenario_id == parametros.id))

  },[parametros.id])

  const [devices,setDevices] = React.useState([]) 
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', flexGrow: 1}}> 
    
{true && <InfoBar title={'Painel'}/>}
  <div className='Page-content'>

    <Navbar/>

    <SectionsColumns>
    
      <SectionsRows>
       
      <SectionCard title='Dispositivos' >
        <SectionsColumns>
        <SectionsRows>
          <div style={{display:'flex',flexWrap:'wrap'}}>

          
          {devices.map((devices) => <DeviceCard key={devices.id} device={devices}/>)}
          

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