import { useState, useEffect } from 'react'

import api from './services/api'

import './App.css'
import './Sidebar.css'
import './Main.css'

import Notes from './components/Notes'
import RadioButton from './components/RadioButton'

function App() {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [allNotes, setAllNotes] = useState([])
  const [selectedOption, setSelectedOption] = useState("all")

  useEffect(() => {
    getAllNotes()
  }, [])

  const getAllNotes = async () => {
    const res = await api.get('/annotations')
    setAllNotes(res.data)
  }

  const loadNotes = async (option) => {
    const res = await api.get(`/priorities?priority=${option}`)

    if (res) {
      setAllNotes(res.data)
    }
  }

  const handleDelete = async (id) => {
    const deletedNote = await api.delete(`/annotations/${id}`)

    if (deletedNote) {
      setAllNotes(allNotes.filter(note => note._id !== id))
    }
  }

  const handleChangePriority = async (id) => {
    const note = await api.post(`/priorities/${id}`)

    if (note && selectedOption === 'all') {
      loadNotes(selectedOption)
    } else if (note) {
      getAllNotes()
    }
  }

  const hanldeSubmit = async (e) => {
    e.preventDefault()

    const res = await api.post('/annotations', {
      title,
      notes,
      priority: false
    })

    setTitle('')
    setNotes('')

    if (selectedOption !== 'all') {
      getAllNotes()
    } else {
      setAllNotes([...allNotes, res.data])
    }    
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.id)

    if (e.target.checked && e.target.id !== 'all') {
        loadNotes(e.target.id)
    } else {
        getAllNotes()
    }
}

  useEffect(() => {
    const enableSubmitButton = () => {
      let btn = document.getElementById('btn-submit')
      btn.style.background = '#ffd3c4'
      if (title && notes) {
        btn.style.background = '#eb8f7a'
      }
    }

    enableSubmitButton()
  }, [title, notes])

  return (
    <div id='app'>
      <aside>
        <strong>Caderno de notas</strong>
        <form onSubmit={hanldeSubmit}>
          <div className="input-block">
            <label htmlFor="title">Título da anotação</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea onChange={(e) => setNotes(e.target.value)} value={notes} required></textarea>
          </div>

          <button id='btn-submit' type="submit">Salvar</button>
        </form>
        <RadioButton 
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
      </aside>

      <main>
        <ul>
          {allNotes.map(data => {
            return (
              <Notes
                key={data._id}
                data={data}
                handleDelete={handleDelete}
                handleChangePriority={handleChangePriority}
              />
            )

          })}
        </ul>
      </main>
    </div>
  )
}

export default App
