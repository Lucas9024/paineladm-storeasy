import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCasaReserva = ({ value, onChange, classe}) => {
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
        <label className={ classe } htmlFor="casaReserva">
            <InputMask
                id="casaReserva"
                placeholder='2133'
                value={value}
                onChange={handleChange} />
            <span className="label">Casa</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraCasaReserva;