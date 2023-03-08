import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function ButtonCadastrar() {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                variant="contained"
                id="buttonCadastrar"
                endIcon={<SendIcon />}
            >
                Cadastre-se
            </Button>
        </Stack>
    );
}

