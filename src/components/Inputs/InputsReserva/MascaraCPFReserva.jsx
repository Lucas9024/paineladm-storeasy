import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCPFReserva = ({ value, onChange, classe}) => {
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
        <label className={classe} htmlFor="cpfReserva">
            <InputMask
                id="cpfReserva"
                mask="999.999.999-99"
                placeholder='123.123.123-12'
                value={value}
                onChange={handleChange} />
            <span className="label">CPF do titular</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraCPFReserva;