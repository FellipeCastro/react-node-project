import { useState } from "react"

import { AiOutlineDelete , AiOutlineExclamationCircle  } from "react-icons/ai"

import api from "../services/api"

function Notes({ key, data, handleDelete, handleChangePriority }) {
    const [changedNotes, setChangedNotes] = useState('')

    const handleEdit = (e, priority) => {
        e.style.cursor = 'text'
        e.style.borderRadius = '5px'

        if (priority) {
            e.style.boxShadow = '0 0 5px white'
        } else {
            e.style.boxShadow = '0 0 5px gray'
        }
    }
    
    const handleSave = async (e, notes) => {
        e.style.cursor = 'default'
        e.style.boxShadow = 'none'

        // Não está funcionando
        if (changedNotes && changedNotes !== notes) {
            await api.post(`/contents/${data._id}`, {
                notes: changedNotes,
            })
        }
    }



    return (
        <>
            <li key={key} className={data.priority ? 'notepad-infos priority' : 'notepad-infos'}>
                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiOutlineDelete  size='20' onClick={() => handleDelete(data._id)} />
                    </div>
                    <textarea 
                        defaultValue={data.notes}
                        onClick={e => handleEdit(e.target, data.priority)}
                        onChange={e => setChangedNotes(e.target.value)}
                        onBlur={e => handleSave(e.target, data.notes)} // quando clicar fora/desfocar
                    />
                    <span>
                        <AiOutlineExclamationCircle size='20' onClick={() => handleChangePriority(data._id)} />
                    </span>
                </div>
            </li>
        </>
    )
}

export default Notes
