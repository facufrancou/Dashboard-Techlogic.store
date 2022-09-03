import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function Product() {

    let { id } = useParams();

    let [ product, setProduct ] = useState(0);

    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.product))
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <h2>Nombre: {product.name}</h2>
            <p>ID: {product.id}</p>
            <p>Precio: $ {product.price}</p>
            <p>Descuento: {product.discount} %</p>
            <p>Descripción: {product.description}</p>
            <p>Sección: {product.section}</p>
            <p>Colección: {product.collection}</p>
            <p>Marca: {product.brand}</p>
            <img src={"/img/products/" + product.image} />
            <Link to={{
                pathname: `/products/edit/${product.id}`,
            }}><Button variant="primary">Editar</Button></Link>
        </div>
    )
}

export default Product