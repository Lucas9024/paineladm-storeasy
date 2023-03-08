import React from 'react';
import './Imovel.scss';
import Pessoa from '../imgs/pessoa.png';
import Chat from '../imgs/chatIcon.png';
import Verificacao from './icones-seguranca.png';
import { Link } from 'react-router-dom';
import RatingRead from '../../pageProfile/Rating';


const Imovel = () => {
    return (
        <div className="dadosImovel">
            <div className="proprietario-dados">
                <div className="dados-prop">
                    <div className="prop-name">
                        <img src={Pessoa} alt="" />
                        <div className='verifi'>
                            <img src={Verificacao} alt="" />
                            <h3>Geferson Silveira</h3>
                        </div>

                        <div className='estrelas'>
                            <RatingRead only={true} fontSize={30} />
                        </div>

                        <p>Engenheiro civíl</p>
                    </div>

                </div>
                <div className="dados-Chat">
                    <img src={Chat} alt="icone-chat" />
                    <button>Falar com Geferson</button>
                </div>
            </div>

            <div className="dadosImovel-preco">
                <div className="precoTempo">
                    <p> Valor: R$210,00 / Hora</p>
                </div>
                <div className="precoTempo">
                    <p>Taxa de serviço: R$4,00</p>
                </div>

                <Link to={'/reservar'} className="linkBlock">
                    <div className="espaco">
                        <button>Reservar espaço</button>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Imovel;
