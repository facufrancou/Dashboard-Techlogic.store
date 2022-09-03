import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {

    let { id } = useParams();

    let [ user, setUser ] = useState([]);

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data.user))
            .catch(e => console.log(e))
    }, [])

    console.log(user);

    return (
        <div>
            <h2>Nombre: {user.name} {user.lastName}</h2>
            <p>ID: {user.id}</p>
            <p>email: $ {user.email}</p>
            <img src={"/img/users/" + user.image} />
        </div>
    )
}

export default User