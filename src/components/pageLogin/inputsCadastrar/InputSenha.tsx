import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PasswordIcon from '@mui/icons-material/Password';

export default function FormattedSenha({inputCampo}) {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex',marginBottom: '10px', alignItems: 'flex-end' }}>
      <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <FormControl variant="standard">
          <InputLabel htmlFor="password">{inputCampo}</InputLabel>
          <Input
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
          />
                        
        </FormControl>
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}>
          {values.showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </Box>
  );
}
