import React from 'react';
import './InputsCadastrar.scss';
import { FormControl } from '@mui/material';
import FormattedEmail from './inputEmail.tsx';
import FormattedSenha from './InputSenha.tsx';
import FormattedTelefone from './inputTelefone.tsx';

const InputsCadastrar = () => {
    return (
        <FormControl className="inputsCadastrar" style={{ marginTop: '0' }}>
            <FormattedEmail />

            <FormattedTelefone
                mascara="(**) * ****-****"
                idCampo="standardTelefone"
                labelCampo="Digite seu número"
            />
            <FormattedSenha inputCampo="Digite uma senha" />
            <FormattedSenha inputCampo="Repita a sua senha" />
        </FormControl>
    );
};

export default InputsCadastrar;
