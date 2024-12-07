import React from 'react'
export default function Title({subtitle,title}) {
  return (
    <div>
         <div  id="heading">
            <h2>{subtitle}</h2>
            <h1>{title}</h1>
         </div>
    </div>
  )
}

