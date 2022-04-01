import React from 'react'
import Dropdown from '../Dropdown/Dropdown';

const CustomItem = ({checklist, deleteItem, editItem}) => {
  return (
        <>
            {checklist.map((value, index)=>(
            <>
                  <div className='itemList' key={value.id}>
                        <div className='innerCustomeItem'>
                              <p style={{whiteSpace: 'nowrap', overflow:' hidden', textOverflow: 'ellipsis'}}>{value.title}</p>
                        </div>
                        <Dropdown deleteItem={deleteItem} editItem={editItem} item={value} index={index}/>
                  </div>
            </>
            ))}
      </>
  )
}

export default CustomItem