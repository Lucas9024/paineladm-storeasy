import React from 'react';
import './InputsMetodos.scss';
import { FormControl } from '@mui/material';
import FormattedEmail from './inputEmail.tsx';
import FormattedSenha from './InputSenha.tsx';

const InputEmail = () => {
    return (
        <FormControl className="inputsLogin" style={{ marginTop: '0' }}>
            <FormattedEmail />
            <FormattedSenha />
        </FormControl>
    );
};

export default InputEmail;
