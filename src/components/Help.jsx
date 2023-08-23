import React from 'react'
import SectionsColumns from '../components/SectionsColumns.jsx'
import SectionCard from '../components/SectionCard.jsx'
import SectionsRows from '../components/SectionsRows.jsx'
const Help = (props) => {
  return (
    <div style={{width:'300px'}}>

    
    <SectionsColumns>
    
      <SectionsRows>
       
       <SectionCard title='Help'>
       {props.pagehelp}
       </SectionCard>


      </SectionsRows>
      

    </SectionsColumns>   
    </div>
  )
}

export default Help