import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCartaoCredito = ({ value, onChange, classe}) => {
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
        <label className={ classe } htmlFor="cartaoCreditoReserva">
            <InputMask
                id="cartaoCreditoReserva"
                mask="9999 9999 9999 9999"
                placeholder='0000 0000 0000 0000'
                value={value}
                onChange={handleChange} />
            <span className="label">Número do cartão</span>
            <span className="focus-bg"></span>
        </label>
    )
}

export default MascaraCartaoCredito;