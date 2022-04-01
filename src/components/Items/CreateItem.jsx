import React from 'react'
import { Link } from "react-router-dom"
import './Items.css'

const CreateItem = ({goToAdd}) => {

  return (
      <div  className='itemList' onClick={goToAdd}>
            <div className='innerItem'>
                  <div>
                        <p style={{fontSize: 20}}>Create a list</p>
                  </div>
                  <div>
                        <Link to="/add">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="#28292E" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.4375 8C15.4375 8.62191 14.9337 9.12535 14.3125 9.12535H9.25V14.1879C9.25 14.8098 8.74621 15.3125 8.125 15.3125C7.50379 15.3125 7 14.8098 7 14.1879V9.12535H1.9375C1.31629 9.12535 0.8125 8.62191 0.8125 8C0.8125 7.37809 1.31629 6.87535 1.9375 6.87535H7V1.81285C7 1.19094 7.50379 0.6875 8.125 0.6875C8.74621 0.6875 9.25 1.19094 9.25 1.81285V6.87535H14.3125C14.9348 6.875 15.4375 7.37773 15.4375 8Z" fill="#28292E"/>
                              </svg>
                        </Link> 
                  </div>
            </div>
      </div>      
  )
}

export default CreateItem