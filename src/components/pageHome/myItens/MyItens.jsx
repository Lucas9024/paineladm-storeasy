import React from 'react';
import './MyItens.scss';
import { Link } from 'react-router-dom';
import lares from './Itens';
import ImgPropriedades from './PropriedadesFotos';

const MyItens = () => {
    // fetch('Itens.js').then((r) => {
    //     console.log(r.json());
    // });
    return (
        <>
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
                                    <h4>Endereço</h4>
                                    <p className="text">{itemLar.endereco}</p>
                                </div>

                                <div className="divTexts">
                                    <h4>Metragem</h4>
                                    <p className="text">20 x 20 mt²</p>
                                </div>
                                <div className="values">
                                    <p className="text-value">
                                        <strong>{itemLar.diaria} </strong> /
                                        diária
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bottomBlock">
                            <Link to={'/item'} className="linkBlock">
                                <button className="btn">Ver</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyItens;
