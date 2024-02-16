import React from "react"
import { AiOutlineDelete , AiOutlineExclamationCircle  } from "react-icons/ai"

function Notes({ data }) {
    return (
        <>
            <li className={data.priority ? 'notepad-infos priority' : 'notepad-infos'}>
                <div>
                    <strong>{data.title}</strong>
                    <div>
                        <AiOutlineDelete  size='20' />
                    </div>
                    <textarea defaultValue={data.notes}></textarea>
                    <span>
                        <AiOutlineExclamationCircle size='20' />
                    </span>
                </div>
            </li>
        </>
    )
}

export default Notes
