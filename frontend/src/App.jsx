import { useState, useEffect } from 'react'

import api from './services/api'

import './App.css'
import './Sidebar.css'
import './Main.css'

import Notes from './components/Notes'

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

  const hanldeSubit = async (e) => {
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

  return (
    <div id='app'>
      <aside>
        <strong>Caderno de notas</strong>
        <form onSubmit={hanldeSubit}>
          <div className="input-block">
            <label htmlFor="title">Título da anotação</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea onChange={(e) => setNotes(e.target.value)} value={notes} required></textarea>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          {allNotes.map(data => {
            return (
              <Notes
                data={data}
              />
            )

          })}
        </ul>
      </main>
    </div>
  )
}

export default App
