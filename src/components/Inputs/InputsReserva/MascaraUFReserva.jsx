import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraUFReserva = ({ value, onChange, classe }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
            }
        })
    }
    return (
        <label className={ classe } htmlFor="ufReserva">
            <InputMask
                id="ufReserva"
                placeholder="RJ"
                value={value}
                onChange={handleChange} />
            <span className="label">UF (Sigla Estado)</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraUFReserva;