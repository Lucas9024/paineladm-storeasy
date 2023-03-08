import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyText = (str) => str.replace(/[^a-zA-Z\u00C0-\u00FF " "]/g, '')

const MascaraNomeReserva = ({ value, onChange, classe }) => {
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
        <label className={ classe } htmlFor="nomeReserva">
            <InputMask
                id="nomeReserva"
                placeholder=" "
                value={value}
                onChange={handleChange} />
            <span className="label">Nome completo do titular</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraNomeReserva;