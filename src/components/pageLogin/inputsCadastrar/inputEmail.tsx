import * as React from "react";
import { IMaskInput } from "react-imask";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

let campoMascara
const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(

  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput {...other}
            mask={campoMascara}
            definitions={{"*": /[a-zA-Z\ ]/}}
            inputRef={ref}
            onAccept={(value: any) =>
            onChange({ target: { name: props.name, value } })
            }
            overwrite
        />
        );
  }
);

interface State {
  textmask: string;
  numberformat: string;
}

export default function FormattedEmail({mascara, labelCampo, idCampo}) {
  campoMascara = mascara
  const [values, setValues] = React.useState<State>({
    textmask: "",
    numberformat: "1321"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px',}}>
        <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id={idCampo}
          label="Digite seu email" 
          variant="standard" />
      </Box>
  );
}

          