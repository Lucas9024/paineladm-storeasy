import React from 'react';
import './Espaços.scss';
import { Link } from 'react-router-dom';
import quartinho from '../../components/pageHome/img/quartinho.png';
import NavBar from '../../components/navbar/NavBar';

const Espacos = () => {
    return (
        <div className="ItemContainer">
            <NavBar />
            <h1>Espaços alugados</h1>
            <ul className="ListItem">
                <li>
                    <img src={quartinho} alt="" />
                    <div className="block">
                        <div className="dados">
                            <h2>Categoria</h2>
                            <p>Espaço pequeno</p>
                        </div>
                        <div className="dados">
                            <h2>Data</h2>
                            <p>11 / 12 / 2021</p>
                        </div>
                        <div className="dados">
                            <h2>Disponível </h2>
                            <p>19:00 / 21:00</p>
                        </div>
                    </div>
                    <div className="bottomBlock">
                        <Link to={'/item'} className="linkBlock">
                            <h2>Ver</h2>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Espacos;
