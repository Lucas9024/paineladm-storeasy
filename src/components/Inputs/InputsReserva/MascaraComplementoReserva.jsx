import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraComplementoReserva = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
            }
        })
    }
    return (
        <label className="inp" htmlFor="complementoReserva">
            <InputMask
                id="complementoReserva"
                placeholder="Casa 1"
                value={value}
                onChange={handleChange} />
            <span className="label">Complemento</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraComplementoReserva;