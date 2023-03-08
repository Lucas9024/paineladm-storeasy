import React from 'react'
import InputMask from 'react-input-mask'
import './InputsMascara.scss'

const MascaraInvisivel = ({ value, onChange }) => {
    return (
        <div class="form__group field">
            <InputMask

                placeholder="Bairro"
                required
                class="form__field invisivel"
                value={value}
                onChange={onChange} />
            <label
                class="form__label"
                for="bairro">

            </label>
        </div>
    )
}

export default MascaraInvisivel;