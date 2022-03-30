import React,{ useState} from 'react'
import { useNavigate } from "react-router-dom";
import Dropdown from '../Dropdown/Dropdown';

const CustomItem = ({checklist, deleteItem, editItem}) => {
  return (
        <>
            {checklist.map((value, index)=>(
            <>
                  <div className='itemList' key={value.id}>
                        <div className='innerItem'>
                              <p>{value.title}</p>
                        </div>
                        <Dropdown deleteItem={deleteItem} editItem={editItem} item={value} index={index}/>
                  </div>
            </>
            ))}
      </>
  )
}

export default CustomItem