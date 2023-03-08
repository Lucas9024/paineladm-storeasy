import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraValidadeCartao = ({ value, onChange, classe}) => {
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
        <label className={ classe } htmlFor="validadeCartaoReserva">
            <InputMask
                id="validadeCartaoReserva"
                mask="99/99"
                placeholder='MM / AA'
                value={value}
                onChange={handleChange} />
            <span className="label">Validade</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraValidadeCartao;