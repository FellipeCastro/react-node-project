import { useState } from "react"

import { AiOutlineDelete , AiOutlineExclamationCircle  } from "react-icons/ai"

import api from "../services/api"

function Notes({ key, data, handleDelete }) {
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
        // if (changedNotes && changedNotes !== notes) {
        //     await api.post(`/contents/${data.id}`, {
        //         notes: changedNotes,
        //     })
        // }

        try {
            if (changedNotes && changedNotes !== notes) {
                await api.post(`/contents/${data.id}`, {
                    notes: changedNotes,
                })
            }
        } catch (err) {
            console.log(`Erro ao atualizar nota: ${err}`)
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
                        <AiOutlineExclamationCircle size='20' />
                    </span>
                </div>
            </li>
        </>
    )
}

export default Notes
