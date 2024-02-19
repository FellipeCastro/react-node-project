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

  useEffect(() => {
    const getAllNotes = async () => {
      const res = await api.get('/annotations')

      setAllNotes(res.data)
    }

    getAllNotes()
  }, [title, notes])

  const handleDelete = async (id) => {
    const deletedNote = await api.delete(`/annotations/${id}`)

    if (deletedNote) {
      setAllNotes(allNotes.filter(note => note._id !== id))
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

    setAllNotes([...allNotes, res.data])
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
        <RadioButton />
      </aside>

      <main>
        <ul>
          {allNotes.map(data => {
            return (
              <Notes
                key={data._id}
                data={data}
                handleDelete={handleDelete}
              />
            )

          })}
        </ul>
      </main>
    </div>
  )
}

export default App
