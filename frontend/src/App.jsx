import './App.css'
import './Sidebar.css'
import './Main.css'
import Notes from './components/Notes'

function App() {

  return (
    <div id='app'>
      <aside>
        <strong>Caderno de notas</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">Título da anotação</label>
            <input type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </ul>
      </main>
    </div>
  )
}

export default App
