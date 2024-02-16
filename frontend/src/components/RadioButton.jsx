import './RadioButton.css'

function RadioButton() {
    return (
        <div className="radio-options">            
            <input type="radio" name="options" id="all"  />
            <label htmlFor="all">Todos</label>

            <input type="radio" name="options" id="priority" />
            <label htmlFor="priority">Prioridade</label>

            <input type="radio" name="options" id="normal" />
            <label htmlFor="normal">Normal</label>
        </div>
    )
}

export default RadioButton
