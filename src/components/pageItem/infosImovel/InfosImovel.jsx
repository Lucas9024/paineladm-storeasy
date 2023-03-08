import React from 'react';
import './InfosImovel.scss';
import Pet from './pet.png';
import cobertura from './cobertura.png';
import iluminacao from './iluminacao.png';
import wifi from './wifi.png';
import Camera from './camera-seguranca.png';
import detector from './detector.png';
import extintor from './extintor.png';

const Infos = () => {
    return (
        <div className="container-infosImovel">
            <div className="infosImovel-title">
                <div>
                    <div style={{
                        marginBottom: '5px',
                        marginTop: '10px'
                    }}>
                        <h3>Descrição do espaço</h3>
                        <hr />
                    </div>
                    <p>
                        Espaço bem arejado e limpo constantemente, com todo cuidado possível com ventilação
                        e segurança. lugar bem fechado e bem cuidado, aceito pets.
                    </p>
                </div>

                <div className="met-categ">
                    <div className="metcateg">
                        <div style={{
                            marginBottom: '5x',
                            marginTop: '10px'
                        }}>
                            <h3>Metragem quadrada</h3>
                            <hr />
                        </div>
                        <p>35mt²</p>
                    </div>
                    <div className="metcateg">
                        <div style={{
                            marginBottom: '5px',
                            marginTop: '10px'
                        }}>
                            <h3>Categoria</h3>
                            <hr />
                        </div>
                        <p>Espaços pequenos</p>
                    </div>
                </div>
            </div>

            <div className="infosImovel-local">
                <div className="local-infos">
                    <div style={{
                        marginBottom: '5px',
                        marginTop: '10px'
                    }}>
                        <h3>Endereço</h3>
                        <hr />
                    </div>

                    <p>Rua: Juiz Nazário</p>
                    <p>Número: 3230</p>
                    <p>Bairro: Santa Tereza</p>
                    <p>Complemento: Apto 202</p>
                </div>
            </div>

            <div className="local-carac">
                <div style={{
                    marginBottom: '5px',
                    marginTop: '10px'
                }}>
                    <h3>Características do local</h3>
                    <hr />
                </div>

                <div className='caracter'>
                    <img src={Pet} alt="" />
                    <p>Aceita Pets</p>

                </div>

                <div className='caracter'>
                    <img src={cobertura} alt="" />
                    <p>Local Fechado</p>
                </div>

                <div className='caracter'>
                    <img src={wifi} alt="" />
                    <p>Wifi liberado</p>

                </div>

                <div className='caracter'>
                    <img src={iluminacao} alt="" />
                    <p>Espaço iluminado</p>
                </div>

            </div>

            <div className="local-carac">
                <div style={{
                    marginBottom: '5px',
                    marginTop: '10px'
                }}>
                    <h3>Segurança do Local</h3>
                    <hr />
                </div>

                <div className='caracter'>
                    <img src={Camera} alt="" />
                    <p>Câmera de segurança</p>
                </div>

                <div className='caracter'>
                    <img src={detector} alt="" />
                    <p>Detector de fumaça</p>
                </div>

                <div className='caracter'>
                    <img src={extintor} alt="" />
                    <p>Extintor de incêncio</p>
                </div>
            </div>
        </div>
    );
};

export default Infos;
