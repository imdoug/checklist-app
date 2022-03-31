import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Edit = ({updateEditedItem,editedItem}) => {
      const [title, setTitle] = useState(editedItem.title)
      let navigate = useNavigate(); 
      const goToHome = () =>{ 
            let path = '/'; 
            navigate(path);
      }
      const handleEdit = () =>{
            updateEditedItem({id: editedItem.id, title: title})
            goToHome()
      }
  return (
      <>
            <div  className='homeHeader'>
                  <div className='cancel' style={{display: 'flex', alignItems: 'center'}} onClick={()=>{goToHome()}}>
                        <svg style={{marginRight: 4}} width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.875 15.875C7.58715 15.875 7.29915 15.7651 7.07977 15.5454L0.329773 8.79541C-0.10968 8.35596 -0.10968 7.64404 0.329773 7.20459L7.07977 0.45459C7.51922 0.0151367 8.23114 0.0151367 8.67059 0.45459C9.11004 0.894043 9.11004 1.60596 8.67059 2.04541L2.71583 8L8.67129 13.9555C9.11075 14.3949 9.11075 15.1068 8.67129 15.5463C8.45157 15.766 8.16329 15.875 7.875 15.875Z" fill="#505050"/>
                        </svg>
                        <p style={{fontSize: '22px',  margin: 0, fontWeight: 700}}>Cancel</p>
                  </div>
                  <div className="done"  style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.05em', textAlign:'right'}} onClick={() =>{handleEdit()}}>
                        Done
                  </div>
            </div>
            <div style={{padding: ' 0px 24px 24px 24px'}}>
                  <input style={{width: '100%', fontSize: 28, color: '#242424',  caretColor: '#2FE6FF', textTransform: 'capitalize', fontWeight: '600', outline: 'none', border: 'none'}}  required value={title} onChange={(e)=> {setTitle(e.target.value)}} />
            </div>  
      </>
  )
}

export default Edit