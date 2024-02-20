import './RadioButton.css'

function RadioButton({ selectedOption, handleOptionChange }) {
    return (
        <div className="radio-options">            
            <input type="radio" name="options" id="all" checked={selectedOption === "all"} onChange={handleOptionChange} />
            <label htmlFor="all">Todos</label>

            <input type="radio" name="options" id="true" checked={selectedOption === "true"} onChange={handleOptionChange} />
            <label htmlFor="true">Prioridade</label>

            <input type="radio" name="options" id="false" checked={selectedOption === "false"} onChange={handleOptionChange} />
            <label htmlFor="false">Normal</label>
        </div>
    );
}

export default RadioButton
