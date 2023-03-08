import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraNumeroReserva = ({ value, onChange, classe }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
                value: onlyNumber(e.target.value)
            }
        })
    }
    return (
        <label className={ classe } htmlFor="numeroReserva">
            <InputMask
                id="numeroReserva"
                mask="(99) 9 9999-9999"
                placeholder='(00) 1 2345-6789'
                value={value}
                onChange={handleChange} />
            <span className="label">Número do titular</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraNumeroReserva;