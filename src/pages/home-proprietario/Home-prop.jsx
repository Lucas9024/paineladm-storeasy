import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//imgs
import Home from './imgs/home.png';
import Caixa from './imgs/box.png';
import Ticket from './imgs/ticket.png';
import Espacos from './imgs/storage.png';
import garagem from './imgs/garagem.jpg';
import Upload from "./imgs/icone-upload.png";

//componentes importados
import NavBar from '../../components/navbar/NavBar';
import Galeria from '../../components/pageHomeProp/galleryAdd/Gallery.jsx';
import InputCat from './InputCat';
import lares from '../../components/pageHome/myItens/Itens';
import Checkbox from '../../components/Checkbox/Checkbox';
import ImgPropriedades from '../../components/pageHome/myItens/PropriedadesFotos';
import ButtonSpace from '../../components/pageHome/buttonSpace/ButtonSpace';

//mascaras
import MascaraCEP from '../../components/Inputs/InputsNumber/MascaraCEP';
import MascaraCasa from '../../components/Inputs/InputsNumber/MascaraCasa';
import MascaraBairro from '../../components/Inputs/InputsText/MascaraBairro';
import MascaraRua from '../../components/Inputs/InputsText/MascaraRua';
import MascaraComplemento from '../../components/Inputs/InputsText/MascaraComplemento';
import MascaraCidade from '../../components/Inputs/InputsText/MascaraCidade';
import MascaraUf from '../../components/Inputs/InputsText/MascaraUf';

//css
import './Home-prop.scss';
import '../../components/pageHome/myItens/MyItens.scss'

// componentes importados de libs
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Creatable, { useCreatable } from 'react-select/creatable';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Create from 'react-select';
import { ActionMeta, OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';


const HomeProp = () => {
    let [timeStart, setTimeStart] = React.useState('00:00');
    let [timeEnd, setTimeEnd] = React.useState('00:00');

    const Calend = () => {
        const disabledDays = [
            {
                year: 2022,
                month: 3,
                day: 6,
            },
        ];
        const handleDisabledSelect = (disabledDay) => {
            alert(
                'Est?? data j?? se encontra alugada. Fa??a a escolha de outra data!',
                disabledDay,
            );
        };

        const [selectedDays, setSelectedDays] = React.useState([]);
        return (
            <div>
                <Calendar
                    value={selectedDays}
                    onChange={setSelectedDays}
                    colorPrimary="#DD0AC8"
                    shouldHighlightWeekends
                    disabledDays={disabledDays}
                    onDisabledDayError={handleDisabledSelect}
                />
                <p style={{ marginTop: '5px', color: '#2e2d2d7f' }}>
                    * Selecionar dias indisponiveis
                </p>
            </div>
        );
    };
    let Inicio = () => {
        return (
            <>
                <h1>Seus espa??os</h1>
                <div className="container">
                    {lares.map((itemLar) => (
                        <div className="box-1" key={itemLar.id}>
                            <>
                                <ImgPropriedades className="imageBox" />
                            </>
                            <div className="boxText">
                                <div className="boxTextCenter">
                                    <div className="divTexts">
                                        <h4>Categoria</h4>
                                        <p className="text">{itemLar.categoria}</p>
                                    </div>
                                    <div className="divTexts">
                                        <h4>Endere??o</h4>
                                        <p className="text">{itemLar.endereco}</p>
                                    </div>

                                    <div className="divTexts">
                                        <h4>Metragem</h4>
                                        <p className="text">20 x 20 mt??</p>
                                    </div>
                                    <div className="values">
                                        <p className="text-value">
                                            <strong>{itemLar.diaria} </strong> /
                                            di??ria
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bottomBlock">
                                <Link to={'/home'} className="linkBlock">
                                    <button className="btn">Ver</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }

    let AddEspaco = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Adicionar espa??o</h1>
                <br />
                <div
                    className="espaco-itens"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box
                        component="form"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        sx={{
                            '& > :not(style)': { m: 1, width: '280px' },
                        }}
                    >
                        <TextField
                            id="filled-basic"
                            label="T??tulo"
                            variant="filled"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Descri????o"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="filled"
                        />

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <label
                                style={{
                                    fontSize: '20px',
                                    color: '#494949',
                                }}>
                                Metragem quadrada
                            </label>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <input style={{
                                    fontSize: '20px',
                                    color: '#494949',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    width: '75px',
                                    borderColor: '#494949'
                                }}
                                    type={"number"} />
                                <p> X </p>
                                <input style={{
                                    fontSize: '20px',
                                    color: '#494949',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    width: '75px',
                                    borderColor: '#494949'
                                }}
                                    type={"number"} />
                            </div>
                        </div>
                    </Box>
                </div>

                <h3>Imagens do seu espa??o</h3>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        onClick={() => setEstadoHome(<ImgEspaco />)}
                    >
                        Pr??ximo
                    </Button>
                </div>
            </div>
        );
    };

    let ImgEspaco = () => {
        return (
            <>
                <div className="imgContainer">
                    <div className="textImg">
                        <h3>Imagens do seu espa??o</h3>
                        <p>As imagens do seu espa??o s??o obrigat??rias! Elas ser??o respons??veis pelo seu cliente ter a visualiza????o do espa??o que est?? alugando.</p>
                    </div>

                    <img className="imgUp" src={Upload} alt="upload de imagens" />

                    <Button
                        variant="contained"
                    >
                        Subir imagem
                    </Button>
                    <br />

                    <ButtonSpace
                        Text="Pr??ximo"
                        variant="contained"
                        onClick={() => setEstadoHome(<RegraAcesso />)}
                    />

                </div>
            </>
        );
    }

    let RegraAcesso = () => {

        const options = [
            { value: "item09", label: "entrada p??blica" },
            { value: "item10", label: "Com escada" },
            { value: "item11", label: "Agendar antes da visita" }
        ]

        const animatedComponents = makeAnimated();
        return (
            <div className="containerAcess">

                <div className="textSelect">
                    <h3>Defina regras de acesso para o seu espa??o</h3>
                </div>

                <CreatableSelect
                    className="selectAcesso"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}

                />
                <Checkbox />

                <Button
                    Text="Pr??ximo"
                    variant="contained"
                    onClick={() => setEstadoHome(<CaracterSecurity />)}
                > Pr??ximo </Button>

            </div>
        )
    }

    let CaracterLocal = () => {
        const animatedComponents = makeAnimated();

        const options = [
            { value: "Item01", label: "Local climatizado" },
            { value: "item02", label: "Proibido pets" },
            { value: "iitem03", label: "Proibido fumar" },
            { value: "item04", label: "local fechado com cadeado/chave" },
            { value: "item05", label: "??rea coberta" },
            { value: "item06", label: "Local com boa ilumina????o" },
            { value: "item07", label: "Wifi liberado" },
            { value: "item08", label: "entrada privada" },
            { value: "item09", label: "entrada p??blica" },
            { value: "item10", label: "local limpado frequentimente" },
            { value: "item11", label: "Oferece embalagem para os pertences" }
        ]

        return (
            <div className="containerLocal">

                <div className="textSelect">

                    <h3>Escolha as caracteristicas de seguran??a</h3>
                    <p>As caracteristicas podem determinar o sucesso do seu local!</p>
                </div>

                <CreatableSelect
                    className="select"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}

                />

                <Button
                    Text="Pr??ximo"
                    variant="contained"
                    onClick={() => setEstadoHome(<CaracterSecurity />)}
                > Pr??ximo </Button>

            </div>
        )
    }
    let CaracterSecurity = () => {

        const animatedComponents = makeAnimated();

        const options = [
            { value: "Item01", label: "Detector de fuma??a" },
            { value: "item02", label: "Cam??ra de seguran??a" },
            { value: "iitem03", label: "Vigilante/Zelador" },
            { value: "item04", label: "Alarme de mon??xido de carbono" },
            { value: "item10", label: "Pr??ticas contra a COVID-19 em vigor" },
            { value: "item11", label: "Extintor de inc??ncio" }
        ]

        return (
            <div className="containerLocal">

                <div className="textSelect">

                    <h3>Escolha as caracteristicas espec??ficas do seu local</h3>
                    <p>As caracteristicas podem determinar o sucesso do seu local!

                    </p>
                </div>

                <CreatableSelect
                    className="selectSecury"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}

                />

                <h3>Este espa??o ?? de propriedade sua ou de terceiros?</h3>

                <div className="textRadio">
                    <input type="radio" id="radio1" name="question" value="0" />
                    <label htmlFor="radio1">Meu espa??o</label>
                </div>

                <div className="textRadio">
                    <input type="radio" id="radio2" name="question" value="1" />
                    <label htmlFor="radio2">De outra pessoa</label>
                </div>

                <Button
                    Text="Pr??ximo"
                    variant="contained"
                    onClick={() => setEstadoHome(<InputAddLocal />)}
                >
                    Pr??ximo
                </Button>

            </div>
        )
    }

    let InputAddLocal = () => {
        const [cepEnd, setCepEnd] = React.useState("");
        const [casaEnd, setCasaEnd] = React.useState("");
        const [bairroEnd, setBairroEnd] = React.useState("");
        const [ruaEnd, setRuaEnd] = React.useState("");
        const [complementoEnd, setComplementoEnd] = React.useState("");
        const [cidadeEnd, setCidadeEnd] = React.useState("");
        const [ufEnd, setUfEnd] = React.useState("");

        return (
            <>
                <h3>Endere??o do local</h3>
                <div className="espacoLocal">
                    <div>
                        <MascaraCEP
                            value={cepEnd}
                            onChange={e => setCepEnd(e.target.value)} />

                        <MascaraCasa
                            value={casaEnd}
                            onChange={e => setCasaEnd(e.target.value)} />

                        <MascaraBairro
                            value={bairroEnd}
                            onChange={e => setBairroEnd(e.target.value)} />

                        <MascaraRua
                            value={ruaEnd}
                            onChange={e => setRuaEnd(e.target.value)} />

                        <MascaraComplemento
                            value={complementoEnd}
                            onChange={e => setComplementoEnd(e.target.value)} />

                        <MascaraCidade
                            value={cidadeEnd}
                            onChange={e => setCidadeEnd(e.target.value)} />

                        <MascaraUf
                            value={ufEnd}
                            onChange={e => setUfEnd(e.target.value)} />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => setEstadoHome(<AddCalendarDate />)}
                        >
                            Pr??ximo
                        </Button>

                    </div>
                </div>
            </>
        );
    };
    let AddCalendarDate = () => {
        return (
            <>
                <div className="espaco-itens">
                    <h3>Disponibilidade</h3>
                    <div
                        className="time-hours"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        &nbsp;Das&nbsp;
                        <input
                            type="time"
                            id="start-time"
                            required
                            defaultValue={timeStart}
                            onChange={() => {
                                setTimeStart(
                                    document.querySelector('#start-time').value,
                                );
                            }}
                        />
                        &nbsp;at??&nbsp;
                        <input
                            type="time"
                            id="end-time"
                            required
                            defaultValue={timeEnd}
                            onChange={() => {
                                setTimeEnd(
                                    document.querySelector('#end-time').value,
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Calend />
                    </div>
                    <div
                        className="espaco-itens"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Stack
                            direction="row"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button onClick={() => setEstadoHome(<ValorPublic />)}>Pr??ximo</Button>
                        </Stack>
                    </div>
                </div>
            </>
        );
    };

    let ValorPublic = () => {

        const [valor, setValor] = useState('00,00');

        const handleAlterar = () => {

            setValor('20,00')
        }

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
            }}>

                <h1> Qual valor ser?? cobrado pelo seu espa??o?</h1>
                <input
                    type="number"
                    style={{
                        padding: '20px',
                        borderRadius: '5px',
                        color: '#000',
                        borderWidth: '1px',
                        borderColor: '#1b1b1b',
                        fontSize: '20px',
                    }}
                    placeholder='Digite o valor do espa??o'
                    className='value' />

                <button
                    onClick={handleAlterar}
                    style={{
                        padding: '10px',
                        marginTop: '20px',
                        color: '#fff',
                        fontWeight: 'bold',
                        backgroundColor: 'blueviolet',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '18px',
                        cursor: 'pointer'
                    }}>Calcular valor</button>

                <h1 style={{ fontWeight: '500' }}>Taxa da Storeasy: {valor} </h1>
                <Button onClick={() => setEstadoHome(<ValorPublic />)}>P??blicar</Button>

            </div>
        );
    }

    let Tickets = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Tickets</h1>
                <div className="espaco-itens"></div>
            </div>
        );
    };

    let EditarEspaco = () => {
        return (
            <div className="content-espaco">
                <h1 className="blog-title">Editar espa??o</h1>
                <div
                    className="espaco-itens"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    {/* <Galeria /> */}
                    <Box
                        component="form"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        sx={{
                            '& > :not(style)': { m: 1, width: '280px' },
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField
                            id="filled-basic"
                            label="T??tulo"
                            variant="filled"
                            value="Texto de teste"
                        />
                        <TextField
                            id="filled-multiline-static"
                            label="Descri????o"
                            multiline
                            rows={6}
                            defaultValue=""
                            variant="filled"
                            value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        />
                        <InputCat />
                    </Box>
                </div>
                <h3>Imagens do espa??o</h3>
                <div className="espaco-itens">IMAGEM</div>
                <h3>Endere??o do local</h3>
                <div className="espaco-itens">
                </div>
                <h3>Disponibilidade</h3>
                <div className="espaco-itens">
                    <div
                        className="time-hours"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        &nbsp;Das&nbsp;
                        <input
                            type="time"
                            id="start-time"
                            required
                            defaultValue={timeStart}
                            onChange={() => {
                                setTimeStart(
                                    document.querySelector('#start-time').value,
                                );
                            }}
                        />
                        &nbsp;at??&nbsp;
                        <input
                            type="time"
                            id="end-time"
                            required
                            defaultValue={timeEnd}
                            onChange={() => {
                                setTimeEnd(
                                    document.querySelector('#end-time').value,
                                );
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px',
                        }}
                    >
                        <Calend />
                    </div>
                    <div
                        className="espaco-itens"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                        }}
                    >
                        <Stack
                            direction="row"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button variant="contained">EDITAR</Button>
                        </Stack>
                    </div>
                </div>
            </div>
        );
    };

    /*  inputsAdd = () => {
        return (
            <div>
     
            </div>
        );
    } */

    let [estadoHome, setEstadoHome] = React.useState(<Inicio />);
    return (
        <div className="container-home-prop">
            <NavBar
                logo={true}
                menu={true}
                acesse={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />
            <div className="prop-container">

                <div className="prop-buttons" style={{ display: 'flex' }}>
                    <Link to="/">
                        <div className="prop-button">
                            <img src={Home} alt="" />
                            <div className="button-frase">
                                <div>Home</div>
                                <div>Principal</div>
                            </div>
                        </div>
                    </Link>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<Inicio />)}
                    >
                        <img src={Espacos} alt="" />
                        <div className="button-frase">
                            <div>Meus</div>
                            <div>Espa??os</div>
                        </div>
                    </div>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<AddEspaco />)}
                    >
                        <img src={Caixa} alt="" />

                        <div className="button-frase">
                            <div>Adicionar</div>
                            <div>Espa??os</div>
                        </div>
                    </div>
                    <div
                        className="prop-button"
                        onClick={() => setEstadoHome(<Tickets />)}
                    >
                        <img src={Ticket} alt="" />
                        <div className="button-frase">
                            <div>Meus</div>
                            <div>Tickets</div>
                        </div>
                    </div>
                </div>
                <main className="prop-content">
                    {estadoHome}
                </main>
            </div>
        </div>
    );
};

export default HomeProp;
