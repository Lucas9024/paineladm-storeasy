import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraCidadeReserva = ({ value, onChange, classe }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
            }
        })
    }
    return (
        <label className={ classe } htmlFor="cidadeReserva">
            <InputMask
                id="cidadeReserva"
                placeholder="São Paulo"
                value={value}
                onChange={handleChange} />
            <span className="label">Cidade</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraCidadeReserva;