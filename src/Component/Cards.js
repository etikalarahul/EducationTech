import React from 'react'
import Cardutil from './Cardutil'

function Cards({coursesdata, temp}) {
  return (
    <div style={{margin: "1rem 4rem", display: "flex", justifyContent: "center",flexWrap:"wrap"}}>
      <Cardutil coursesdata={coursesdata[0 + temp]} />
      <Cardutil coursesdata={coursesdata[1 + temp]}/>
      <Cardutil coursesdata={coursesdata[2 + temp]}/>
      <Cardutil coursesdata={coursesdata[3 + temp]}/>

    </div>
  )
}

export default Cards
