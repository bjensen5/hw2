import React from 'react'

export default function Todo ({ title, description, dateCreated, completed, dateCompleted }) {

     return (
          <div>
               <h3>{title}</h3>
               <div>{description}</div>
               <br />
               <div><i>created on:</i><br />{dateCreated}</div>
               <input type="checkbox" value={completed} />
         
               <i>completed? <b>{dateCompleted}</b> </i>
          
          </div> 
     )
}
