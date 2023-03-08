import * as React from "react";
import { IMaskInput } from "react-imask";
import NumberFormat from "react-number-format";
import { TextField, 
         FormControl, 
         Button, 
         InputLabel, 
         Input, 
         Box } from '@mui/material';

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
            definitions={{
            "#": /[1-9]/
            }}
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

export default function FormattedInputs({mascara, labelCampo, idCampo, value, disa}) {
  campoMascara = mascara
  const [values, setValues] = React.useState<State>({
    textmask: value,
    numberformat: "1320"
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1
        }
      }}
    >
      <FormControl style={{ margin: '0px', marginRight: '10px' }} variant="standard">
        <InputLabel required htmlFor="formatted-text-mask-input">{labelCampo}</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          disabled={disa ? true : false}
          name="textmask"
          id={idCampo}
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
    </Box>
  );
}
