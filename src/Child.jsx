import React from 'react'
import GrandC from './GrandC'
export default function Child({propdata}) {
  return (
    <div id="child">
        child
        <GrandC grandprop= {propdata}/>
    </div>
  )
}
