import React from 'react';
import './Profile.scss';
import NavBar from '../../components/navbar/NavBar';
import perfilImg from '../../components/pageHome/img/pessoa-perfil.png';
import RatingRead from '../../components/pageProfile/Rating';

import MascaraCPF from '../../components/Inputs/InputsNumber/MascaraCPF';
import MascaraNascimento from '../../components/Inputs/InputsNumber/MascaraNascimento';
import MascaraCEP from '../../components/Inputs/InputsNumber/MascaraCEP';
import MascaraNome from '../../components/Inputs/InputsText/MascaraNome';
import MascaraCasa from '../../components/Inputs/InputsNumber/MascaraCasa';
import MascaraBairro from '../../components/Inputs/InputsText/MascaraBairro';
import MascaraRua from '../../components/Inputs/InputsText/MascaraRua';
import MascaraComplemento from '../../components/Inputs/InputsText/MascaraComplemento';
import MascaraCidade from '../../components/Inputs/InputsText/MascaraCidade';
import MascaraUf from '../../components/Inputs/InputsText/MascaraUf';

const Profile = () => {
    //infos pessoais
    const [nome, setNome] = React.useState("");
    const [nascimento, setNascimento] = React.useState("");
    const [cpf, setCpf] = React.useState("");

    // endereco
    const [cep, setCep] = React.useState("");
    const [casa, setCasa] = React.useState("");
    const [bairro, setBairro] = React.useState("")
    const [rua, setRua] = React.useState("")
    const [complemento, setComplemento] = React.useState("")
    const [cidade, setCidade] = React.useState("")
    const [uf, setUf] = React.useState("")

    return (
        <div className="container-profile">
            <NavBar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />

            <main className="profile-content-top">
                <div className="content-top">
                    <div className="top-img">
                        <img src={perfilImg} draggable="false" alt="" />
                    </div>
                    <div className="top-dados">
                        <div className="dados-rating">
                            <RatingRead 
                            only={true} 
                            fontSize="40" />
                        </div>
                        <div className="dados-name">
                            <h2>Claudia Ferreira da Silva </h2>
                        </div>
                    </div>
                </div>
                <div className="content-main">
                    <h1 style={{
                        fontSize: '25px',
                        fontWeight: '500'
                    }}>
                        Informações Pessoais
                    </h1>

                    <div className='informacoes-pessoais'>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0 auto',
                            justifyContent: 'center'

                        }}>
                            <MascaraNome
                                value={nome}
                                onChange={(e) => (
                                    setNome(e.target.value)
                                )} />
                            <MascaraNascimento
                                value={nascimento}
                                onChange={(e) => (
                                    setNascimento(e.target.value)
                                )} />
                            <MascaraCPF
                                value={cpf}
                                onChange={(e) => (
                                    setCpf(e.target.value)
                                )} />
                        </div>

                        <h1>Endereço completo</h1>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            maxWidth: '700px',
                            margin: '0 auto',
                            justifyContent: 'center'
                        }}>
                            <MascaraCEP
                                value={cep}
                                onChange={(e) => (
                                    setCep(e.target.value)
                                )} />
                            <MascaraCasa
                                value={casa}
                                onChange={(e) => (
                                    setCasa(e.target.value)
                                )} />
                            <MascaraBairro
                                value={bairro}
                                onChange={(e) => (
                                    setBairro(e.target.value)
                                )} />
                            <MascaraRua
                                value={rua}
                                onChange={(e) => (
                                    setRua(e.target.value)
                                )} />
                            <MascaraComplemento
                                value={complemento}
                                onChange={(e) => (
                                    setComplemento(e.target.value)
                                )} />

                            <MascaraCidade
                                value={cidade}
                                onChange={(e) => (
                                    setCidade(e.target.value)
                                )} />

                            <MascaraUf value={uf}
                                onChange={(e) => (
                                    setUf(e.target.value)
                                )} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
