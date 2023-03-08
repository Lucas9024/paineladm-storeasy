import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },

    },
};

const names = [
    'Opção 1',
    'Opção 2',
    'Opção 3',
    'Opção 4',
    'Opção 5',
    'Opção 6',
    'Opção 7',
    'Opção 8',
    'Opção 9',
    'Opção 10',
];

export default function InputCat() {
    const [categoria, setCategoria] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategoria(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <FormControl sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-multiple-checkbox-label">
                Categorias
            </InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={categoria}
                onChange={handleChange}
                input={<OutlinedInput label="Categorias" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={categoria.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
