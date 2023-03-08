import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Form.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Searchbar = ({ data }) => {
    const [inputSearch, setInputSearch] = useState("")
    const [filterSearch, setFilterSearch] = useState([])


    const handleInputChange = (e) => {
        //atualizando oq está sendo escrito
        setInputSearch(e.target.value)

        //filtrando oq está sendo escrito
        const newFilter = data.filter((i) => {
            return i.Cidade.toLowerCase().includes(inputSearch.toLowerCase()) ||
                i.Estado.toLowerCase().includes(inputSearch.toLowerCase())
        }
        )

        setFilterSearch(newFilter)
    }

    // apagando os resultados 
    useEffect(() => {
        if (inputSearch === "") return setFilterSearch([])
    }, [inputSearch])


    return (
        <>
            <div className="containerForm">
                <Paper
                    className="form"
                    component="form"
                    sx={{
                        p: '10px 8px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '50px',
                        paddingLeft: '30px',
                    }}
                >
                    <input
                        type="text"
                        className='inputForm'
                        placeholder='Buscar cidade ou estado'
                        value={inputSearch}
                        onChange={handleInputChange}

                    />

                    <Divider
                        sx={{
                            height: 25,
                            m: 0.7
                        }}
                        orientation="vertical" />

                    <IconButton
                        sx={{
                            p: '8px',
                            color: '#fff',
                            backgroundColor: '#9C5BFF'
                        }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>

                {filterSearch !== 0 &&
                    <div className='dateResult'>
                        {filterSearch.map(({ id, Cidade, Estado, img, categoria, Endereco }) => (
                            <Link to={'/item'} key={id}>
                                <div className='dataItem' >
                                    <div className='dataItem-img'>
                                        <img
                                            src={img}
                                            alt="imagem propriedade" />
                                    </div>
                                    <div className='dataItem-info'>
                                        <p>{categoria}</p>
                                        <p>{Cidade} - {Estado}</p>
                                        <p>{Endereco}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>}
            </div>
        </>
    );
};

export default Searchbar;
