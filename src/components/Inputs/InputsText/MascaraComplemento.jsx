import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraComplemento = ({ value, onChange }) => {
    return (
        <div className="form__group field">
            <InputMask
                placeholder="Complemento"
                className="form__field"
                value={value}
                onChange={onChange} />
            <label
                className="form__label"
                htmlFor="bairro">
                Complemento
            </label>
        </div>
    )
}

export default MascaraComplemento;