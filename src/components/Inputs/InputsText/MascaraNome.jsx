import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyText = (str) => str.replace(/[^a-zA-Z\u00C0-\u00FF " "]/g, '')

const MascaraNome = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
                value: onlyText(e.target.value)
            }
        })
    }
    return (
        <div className="form__group field">
            <InputMask
                placeholder="Nome completo"
                required
                className="form__field"
                value={value}
                onChange={handleChange} />
            <label
                className="form__label"
                htmlFor="Nome completo">
                Nome completo
            </label>
        </div>
    )
}

export default MascaraNome;