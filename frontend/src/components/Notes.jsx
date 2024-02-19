import { useState } from "react"

import { AiOutlineDelete , AiOutlineExclamationCircle  } from "react-icons/ai"

import api from "../services/api"

function Notes({ data }) {
    const [changedNotes, setChangedNotes] = useState('')

    const handleSave = async (e, notes) => {
        if (changedNotes && changedNotes !== notes) {
            await api.post(`/contents/${data.id}`, {
                notes: changedNotes,
            })
        }
    }

    const handleEdit = (e, priority) => {
        console.log('funcionando')
    }

    return (
        <>
            <li key={data._id} className={data.priority ? 'notepad-infos priority' : 'notepad-infos'}>
                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiOutlineDelete  size='20' />
                    </div>
                    <textarea 
                        defaultValue={data.notes}
                        onClick={e => handleEdit(e.target, data.priority)}
                        onChange={e => setChangedNotes(e.target.value)}
                        onBlur={e => handleSave(e.target, data.notes)} // quando clicar fora/desfocar
                    />
                    <span>
                        <AiOutlineExclamationCircle size='20' />
                    </span>
                </div>
            </li>
        </>
    )
}

export default Notes
