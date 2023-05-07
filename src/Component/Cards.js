import React from 'react'
import Cardutil from './Cardutil'

function Cards() {
  return (
    <div style={{margin: "1rem 4rem", display: "flex", justifyContent: "space-between"}}>
      <Cardutil />
      <Cardutil />
      <Cardutil />
      <Cardutil />

    </div>
  )
}

export default Cards
