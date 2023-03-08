import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCVVCartao = ({ value, onChange, classe}) => {
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
        <label className={ classe }htmlFor="cvvCartaoReserva">
            <InputMask
                id="cvvCartaoReserva"
                mask="9999"
                placeholder='1234'
                value={value}
                onChange={handleChange} />
            <span className="label">CVV</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraCVVCartao;