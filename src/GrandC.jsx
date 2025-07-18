import React from 'react'

export default function GrandC(grandprop) {
    console.log(grandprop)
  return (
    <div id="grand">
        gchild
        <br/>
        {grandprop.name}
        <br/>
        {grandprop.age}
        <br/>
        {grandprop.city}
      
    </div>
  )
}
