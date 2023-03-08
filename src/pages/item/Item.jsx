import React from 'react';
import './Item.scss';
import NavBar from '../../components/navbar/NavBar';
import Gallery from '../../components/pageItem/gallery/Gallery';
import Imovel from '../../components/pageItem/dadosImovel/Imovel';
import Infos from '../../components/pageItem/infosImovel/InfosImovel';
import Mapa from '../../components/pageItem/imgs/maps.jpeg';

import ChatUser from '../../chat/ChatUser';

const Item = () => {
    return (
        <div className="Container--item">
            <NavBar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />

            <main className="item-conteudo">

                <div className="item-conteudo-infos">
                    <Infos />
                    <Imovel />
                </div>

                <div className="item-conteudo-inicio">
                    <Gallery />
                </div>
                <div className="mapa">
                    <h1>Veja este lugar no mapa</h1>
                    <img src={Mapa} alt="" className='maps' />
                </div>

            </main>
        </div>
    );
};

export default Item;
