import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraBairro = ({ value, onChange }) => {
    return (
        <div className="form__group field">
            <InputMask
                placeholder="Bairro"
                required
                className="form__field"
                value={value}
                onChange={onChange} />
            <label
                className="form__label"
                htmlFor="bairro">
                Bairro
            </label>
        </div>
    )
}

export default MascaraBairro;