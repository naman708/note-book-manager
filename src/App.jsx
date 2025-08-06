import { useState } from 'react'
import Card from './components/Card'
import DisplayComponent from './components/DisplayCard'
import SearchBar from './components/searchBar'
import NoteBookCard from './components/NoteBookCard'
import './App.css'

function App() {
  const [data, SetData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

  const handleData = (FormData) => {
    SetData([...data, FormData])

  }
  const deletehandler = (indexid) => {

    SetData(data.filter((_, index) => index != indexid))
    
  }
  const filterData=data.filter((note)=> {
   return( note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  )
  return (
    <>
      <div className=''>
        <Card />
      </div>

      <SearchBar onSearch={setSearchTerm} />
      <NoteBookCard onSubmit={handleData} />
      {filterData.length === 0 ? (<div className="max-w-md mx-auto mt-6 p-4 bg-gray-100 shadow rounded">No note to display</div>) :
        filterData.map((note,index)=>(<DisplayComponent
          data={note}
          key={index}
          onDelete={()=>deletehandler(index)}
        />
        ))
      }

    </>
  )
}

export default App
