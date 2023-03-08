import React from 'react';
import InputsMetodos from '../../components/pageLocation/inputsMetodos/InputsMetodos';
import Calendario from '../../components/pageLocation/calendar/Calendario';
import NavBar from '../../components/navbar/NavBar';
import './Location.scss';
import { Button } from '@mui/material';
import Todo from '../../components/pageLocation/todoApp/TodoLis';

const Location = () => {
    let [timeStart, setTimeStart] = React.useState('00:00');
    let [timeEnd, setTimeEnd] = React.useState('00:00');

    return (
        <div className="container-location">
            <NavBar />
            <section className="time-location">
                <h1>Por quanto tempo deseja alugar?</h1>
                <div className="times">
                    <div className="time-hours">
                        <div>
                            De{' '}
                            <input
                                type="time"
                                id="start-time"
                                required
                                defaultValue={timeStart}
                                onChange={() => {
                                    setTimeStart(
                                        document.querySelector('#start-time')
                                            .value,
                                    );
                                }}
                            />{' '}
                            até{' '}
                            <input
                                type="time"
                                id="end-time"
                                required
                                defaultValue={timeEnd}
                                onChange={() => {
                                    setTimeEnd(
                                        document.querySelector('#end-time')
                                            .value,
                                    );
                                }}
                            />
                        </div>
                    </div>
                    <div className="time-date">
                        <div>
                            <Calendario
                                timeStart={timeStart}
                                timeEnd={timeEnd}
                            />
                        </div>
                    </div>
                </div>
                <section className="paymont">
                    <h1>Método de pagamento</h1>
                    <div className="pagamento">
                        <label style={{ userSelect: 'none' }}>
                            <input type="checkbox" name="" id="" /> Usar meus
                            dados bancários
                        </label>
                        <InputsMetodos />
                    </div>
                </section>
                <section className="listItens" style={{ marginTop: '40px' }}>
                    <Todo />
                </section>
                <section className="locationButton">
                    <Button
                        style={{
                            width: '100px',
                            alignSelf: 'center',
                            marginTop: '30px',
                            backgroundColor: '#000',
                            color: '#FFF',
                        }}
                        variant="contained"
                    >
                        Alugar
                    </Button>
                </section>
            </section>
        </div>
    );
};

export default Location;
