import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraNascimento = ({ value, onChange }) => {
    return (
        <div className="form__group field">
            <InputMask
                placeholder="Data de Nascimento"
                mask="99/99/9999"
                required
                className="form__field"
                value={value}
                onChange={onChange} />
            <label
                className="form__label"
                htmlFor="Data de Nascimento">
                Data de Nascimento
            </label>
        </div>
    )
}

export default MascaraNascimento;