import React from 'react';
import './InputsMetodos.scss';
import { FormControl } from '@mui/material';
import FormattedInputs from './input.tsx';
import FormattedName from './inputName.tsx';
import BasicSelect from './Select.tsx';

const InputsMetodos = () => {
    return (
        <FormControl>
            <BasicSelect />
            <div className="inputs" style={{ marginTop: '10px' }}>
                <FormattedName
                    mascara=""
                    labelCampo="Nome do titular"
                    idCampo="standardName"
                    disa={true}
                    value="Teste"
                />
                <FormattedInputs
                    mascara="000.000.000-00"
                    labelCampo="CPF do titular"
                    idCampo="standardCpf"
                    disa={true}
                    value="12345678910"
                />
            </div>
            <div className="inputs">
                <FormattedInputs
                    mascara="00000000-0"
                    labelCampo="Conta"
                    idCampo="standardConta"
                    disa={true}
                    value="123456789"
                />
                <FormattedInputs
                    mascara="0000"
                    labelCampo="Agência"
                    idCampo="standardAgencia"
                    disa={true}
                    value="1234"
                />
            </div>
            <div className="inputs">
                <FormattedInputs
                    mascara="**** **** 0000 0000"
                    labelCampo="Número do cartão"
                    idCampo="standardCartao"
                    disa={true}
                    value="1234 1234 1234 1234"
                />

                <FormattedInputs
                    mascara="0000"
                    labelCampo="CVV"
                    idCampo="standardCpf"
                    disa={true}
                    value="1234"
                />

                <FormattedInputs
                    mascara="00/00"
                    labelCampo="Data de validade"
                    idCampo="standardValidade"
                    disa={true}
                    value="1019"
                />
            </div>
        </FormControl>
    );
};

export default InputsMetodos;
