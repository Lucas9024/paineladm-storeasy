import React from 'react';
import imagemGrande from './garagem.jpg';
import './Gallery.scss';

const Galeria = () => {
    return (
        <div className="galleryAdd">
            <div className="itemGrandeAdd">
                <img className="imgItemGrandeAdd" src={imagemGrande} alt="" />
            </div>
            <div className="itensPequenosAdd">
                <img
                    src={imagemGrande}
                    alt=""
                    className="imgItensPequenosAdd"
                />
                <img
                    src={imagemGrande}
                    alt=""
                    className="imgItensPequenosAdd"
                />
                <img
                    src={imagemGrande}
                    alt=""
                    className="imgItensPequenosAdd"
                />
            </div>
        </div>
    );
};

export default Galeria;
