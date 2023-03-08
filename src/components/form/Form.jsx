import * as React from 'react';
import './Form.scss';
import Searchbar from './Searchbar';

import Propriedades from './db.jsx';
const Form = () => {

    return (
        <>
            <Searchbar data={Propriedades} />
        </>
    );
};

export default Form;
