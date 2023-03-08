import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import './Login.scss';
import facebook from '../../assets/login/facebook.png';
import gmail from '../../assets/login/gmail.png';
import InputLogin from '../../components/pageLogin/inputsMetodos/InputsMetodos.jsx';
import ButtonLogin from '../../components/pageLogin/buttonLogin/ButtonLogin';
import ButtonCadastrar from '../../components/pageLogin/buttonCadastresse/ButtonCadastrar';
import InputsCadastrar from '../../components/pageLogin/inputsCadastrar/InputsCadastrar';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Login = () => {
    let [metodo, setMetodo] = React.useState('login');
    return (
        <>
            <NavBar
                logo={true}
                menu={true}
                acesse={true} />
            <div className="container-login">
                <div className="login-bg">
                    <p className="textChamativo">
                        Qual categoria atende as suas necessidades de armazenamento?
                    </p>
                    <p className="textChamativo1">
                        Encontre seu espaço perfeito para seus bens, bem perto de
                        você!
                    </p>
                    <div className="login">
                        {metodo === 'login' && (
                            <div>
                                <h3>Acesse em segundos</h3>
                                <p className="or">
                                    Use sua conta para entrar na storeasy!
                                </p>
                                <div className="login-externo">
                                    <img
                                        src={facebook}
                                        draggable="false"
                                        alt="login facebook"
                                        style={{ height: '42px', marginTop: '3px' }}
                                    />
                                    <div className="bar"></div>
                                    <img
                                        src={gmail}
                                        draggable="false"
                                        alt="login gmail"
                                    />
                                </div>
                                <div className="or">
                                    Você pode usar seu Email também
                                </div>
                                <div className="email-senha">
                                    <form>
                                        <InputLogin />
                                    </form>
                                </div>
                                <div className="passwordhelp">
                                    <a>Esqueceu sua senha?</a>
                                </div>
                                <div className="buttonsLogin">
                                    <div>
                                        <ButtonLogin />
                                        <div onClick={() => setMetodo('cadastrar')}>
                                            <ButtonCadastrar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {metodo === 'cadastrar' && (
                            <div>
                                <h3>Cadastre-se. É rápido!</h3>
                                <p>Aproveite nossos benefícios hoje!</p>
                                <div className="login-externo">
                                    <img
                                        src={facebook}
                                        draggable="false"
                                        alt="login facebook"
                                        style={{ height: '42px', marginTop: '3px' }}
                                    />
                                    <div className="bar"></div>
                                    <img
                                        src={gmail}
                                        draggable="false"
                                        alt="login gmail"
                                    />
                                </div>
                                <div className="or">Ou</div>
                                <div className="email-senha">
                                    <InputsCadastrar />
                                </div>
                                <div className="passwordhelp">
                                    <div onClick={() => setMetodo('login')}>
                                        <a>Já possui cadastro </a>
                                    </div>
                                </div>
                                <div className="buttonsLogin">
                                    <div>
                                        <div onClick={() => setMetodo('cadastrar')}>
                                            <Stack direction="row" spacing={2}>
                                                <Button
                                                    variant="contained"
                                                    id="buttonCadastrar"
                                                    endIcon={<SendIcon />}
                                                >
                                                    Cadastrar
                                                </Button>
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
