import React from 'react'

const InfoBar = (props) => {
  return (
    <div className="Top-bar">
        
    <div  className="Page-title " >{props.title}</div>
    <div className='Page-info' onClick={() => alert('informações')}>informações</div>
  </div>
  )
}

export default InfoBar