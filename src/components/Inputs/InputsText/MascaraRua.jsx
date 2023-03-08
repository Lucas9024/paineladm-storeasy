import React from 'react'
import InputMask from 'react-input-mask'
import '../InputsMascara.scss'

const MascaraRua = ({ value, onChange }) => {
    return (
        <div className="form__group field">
            <InputMask
                placeholder="Rua"
                required
                className="form__field"
                value={value}
                onChange={onChange} />
            <label
                className="form__label"
                htmlFor="Rua">
                Rua
            </label>
        </div>
    )
}

export default MascaraRua; 