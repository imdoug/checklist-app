import './App.css'
import React,{ useState} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home, Add, Edit } from './components'

const App = () => {
      const [editedItem, setEditedItem] = useState({})
      const [checklist, setCheckList] = useState([
            // {id: 1, title: 'Movies'},
            // {id: 2, title: 'Books'},
            // {id: 3, title: 'Favorite Songs'},
      ])
      const addNewItem = (newItem) =>{
            let items = [...checklist]
            items.push(newItem)
            setCheckList(items)
      }
      const updateEditedItem = (item) =>{
            let items = [...checklist]
            items.splice(item.id - 1, 1)
            items.splice(item.id - 1, 0, item)
            setCheckList(items)
            setEditedItem({})
      }
      const editItem = (item) =>{
            setEditedItem(item)
      }
      const deleteItem = (index) =>{
            let items = [...checklist]
            items.splice(index, 1)
            setCheckList(items)
      }
  return (
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<div className='App'><Home checklist={checklist} deleteItem={deleteItem} editItem={editItem}/></div> } />
                  <Route path="/add" element={<Add checklist={checklist} addNewItem={addNewItem}/>} />
                  <Route path="/edit" element={<Edit checklist={checklist} updateEditedItem={updateEditedItem} editedItem={editedItem}/>} />
            </Routes>
      </BrowserRouter>
  )
}

export default App