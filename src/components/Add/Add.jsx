import Reac, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Add = ({addNewItem, checklist}) => {
      const [title, setTitle]= useState('')
      const [error, setError]= useState(false)

      let navigate = useNavigate(); 
      const goToHome = () =>{ 
            let path = '/'; 
            navigate(path);
      }
      const newItem = () =>{
            const newItem = { 
                  id: checklist.length + 1,
                  title: title
            }
            addNewItem(newItem)
      }

  return (
      <>
      <div  className='addHeader'>
            <div onClick={goToHome} style={{display: 'flex', alignItems: 'center'}}>
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.875 15.875C7.58715 15.875 7.29915 15.7651 7.07977 15.5454L0.329773 8.79541C-0.10968 8.35596 -0.10968 7.64404 0.329773 7.20459L7.07977 0.45459C7.51922 0.0151367 8.23114 0.0151367 8.67059 0.45459C9.11004 0.894043 9.11004 1.60596 8.67059 2.04541L2.71583 8L8.67129 13.9555C9.11075 14.3949 9.11075 15.1068 8.67129 15.5463C8.45157 15.766 8.16329 15.875 7.875 15.875Z" fill="#505050"/>
                  </svg>
                  <p style={{fontSize: '22px'}}>Cancel</p>
            </div>
            <Link to="/" style={{textDecoration: 'none', fontSize: 18, color:'#505050'}} onClick={newItem}>Done</Link>
      </div>
      <div style={{padding: ' 0px 24px 24px 24px'}}>
            <input style={{width: '100%', fontSize: 28, color: '#242424',  caretColor: '#2FE6FF', textTransform: 'capitalize', fontWeight: '600', outline: 'none', border: 'none'}} placeholder='List title...' required onChange={(e)=> {setTitle(e.target.value)}} />
      </div>
      {error ? <p>{error}</p> : <></>}
      </>
  )
}

export default Add