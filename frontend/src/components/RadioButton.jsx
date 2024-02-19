import { useState } from 'react'

import './RadioButton.css'

function RadioButton() {
    const [selectedOption, setSelectedOption] = useState("all")

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id)
    }

    return (
        <div className="radio-options">            
            <input type="radio" name="options" id="all" checked={selectedOption === "all"} onChange={handleOptionChange} />
            <label htmlFor="all">Todos</label>

            <input type="radio" name="options" id="priority" checked={selectedOption === "priority"} onChange={handleOptionChange} />
            <label htmlFor="priority">Prioridade</label>

            <input type="radio" name="options" id="normal" checked={selectedOption === "normal"} onChange={handleOptionChange} />
            <label htmlFor="normal">Normal</label>
        </div>
    );
}

export default RadioButton
