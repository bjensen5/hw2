import React from 'react'

export default function Todo ({ title, description, author }) {
  return (
       <div>
          <h3>{title}</h3>
          <div>{description}</div>
          <div>{Date().toString()}</div>
          <br />
          <i>created by <b>{author}</b></i>
      </div> 
 )
}
