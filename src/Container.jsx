import React from 'react'

export default function Container({box}) {
  return (
    <div
    style={{
        height: "100px",
        width: "100px",
        border: "1px solid black"
    }}
    >
        {box}
    </div>
  )
}
