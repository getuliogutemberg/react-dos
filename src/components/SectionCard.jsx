import React from 'react'

const SectionCard = (props) => {
  return (
    <div className="Section"  style={ 
      props.title ==='Login' ? {minWidth:'30vmin', margin:'30vmin auto auto 30vmin' ,maxHeight:'29vmin'}
      : props.title ==='Registro'? {minWidth:'30vmin', margin:'30vmin auto auto 30vmin' ,maxHeight:'35vmin'}
      :{}}>
        <div className='Section-title'>{props.title}</div>
        <div className='Section-content'>
        {props.children}
        </div>
      </div>
  )
}

export default SectionCard