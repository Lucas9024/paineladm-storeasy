import React from 'react';

import Form from '../../components/form/Form';
import Item from '../../components/pageHome/itens/Item';
import MyItens from '../../components/pageHome/myItens/MyItens';
import NavBar from '../../components/navbar/NavBar';
import ModalAviso from '../../components/modal/ModalAviso';

import './Home.css';
import './Animation.css';
import './App.scss';

let Home = () => {
    return (
        <div className="App">
            <NavBar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />

            <div className="containerApp">
                <Form />
                <Item />

                {/* <ModalAviso
                    conteudoButton="Entendido"
                    conteudoParagrafo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." /> */} 
                    
                <h1
                    className="text"
                    style={{
                        fontSize: '1.4em',
                    }}
                >
                    Reserve já um lar para seus pertences!
                </h1>
                <MyItens />
            </div>
        </div>
    );
};

export default Home;
