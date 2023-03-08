import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const onlyText = (str) => str.replace(/[^a-z, A-Z]/g, '')

const MascaraUf = ({ value, onChange }) => {
    function handleChange(e) {
        onChange({
            ...e,
            target: {
                ...e.target,
                value: onlyText(e.target.value)
            }
        })
    }
    return (
        <div className="form__group field">
            <InputMask
                placeholder="UF"
                mask="aa"
                required
                className="form__field ufUppercase"
                value={value}
                onChange={handleChange} />
            <label
                className="form__label"
                htmlFor="UF">
                UF
            </label>
        </div>
    )
}

export default MascaraUf;