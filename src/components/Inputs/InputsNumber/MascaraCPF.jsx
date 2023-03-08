import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyNumber = (str) => str.replace(/[^0-9]/g, '')

const MascaraCPF = ({ value, onChange }) => {
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
        <div className="form__group field">
            <InputMask
                placeholder="CPF"
                mask="999.999.999-99"
                required=""
                className="form__field"
                value={value}
                onChange={handleChange} />
            <label
                className="form__label"
                htmlFor="CPF">
                CPF
            </label>
        </div>
    )
}

export default MascaraCPF;