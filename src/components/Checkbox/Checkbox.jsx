import React, { useEffect, useState } from 'react';
import './Checkbox.scss';

const userData = [
    { name: 'Segunda-feira' },
    { name: 'Terça-feira' },
    { name: 'Quarta-feira' },
    { name: 'Quinta-feira' },
    { name: 'Sexta-feira' },
    { name: 'Sabado' },
    { name: 'Domingo' },
];

function Checkbox() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(userData);
    }, []);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'allSelect') {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user,
            );
            setUsers(tempUser);
        }
    };

    return (
        <div>
            <div className="container my-4" style={{ width: 400 }}>
                <form className="form">
                    <h3>selecione os dias de acesso ao seu espaço</h3>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form"
                            name="allSelect"
                            checked={
                                users.filter((user) => user?.isChecked !== true)
                                    .length < 1
                            }
                            onChange={handleChange}
                        />
                        <label className="form-check-label ms-2">
                            &nbsp; &nbsp; Diariamente
                        </label>
                    </div>
                    {users.map((user) => (
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form"
                                name={user.name}
                                onChange={handleChange}
                                checked={user?.isChecked || false}
                            />
                            <label className="form-check-label ms-2">
                                &nbsp; &nbsp; {user.name}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
}

export default Checkbox;
