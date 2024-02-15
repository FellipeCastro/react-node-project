import React from "react"

function Notes({ data }) {
    return (
        <>
            <li className='notepad-infos'>
                <div>
                    <strong>{data.title}</strong>
                    <div>
                        x
                    </div>
                    <textarea defaultValue={data.notes}></textarea>
                    <span>!</span>
                </div>
            </li>
        </>
    )
}

export default Notes
