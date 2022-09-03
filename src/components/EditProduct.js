import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditProduct() {

    let { id } = useParams();

    let [data, setData] = useState({
        name: '',
        section: '',
        collection: '',
        brand: '',
        price: '',
        discount: '',
        description: '',
        image: ''
    });
    let [ product, setProduct ] = useState(0)
    let [ listSections, setListSections] = useState([]);
    let [ listCollections, setListCollections] = useState([]);
    let [ listBrands, setListBrands] = useState([]);

    useEffect(() => {

        fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data.product))
            .catch(e => console.log(e))
        fetch('/api/sections')
                .then(response => response.json())
                .then(data => setListSections(data.sections))
                .catch(e => console.log(e))
        fetch('/api/collections')
                .then(response => response.json())
                .then(data => setListCollections(data.collections))
                .catch(e => console.log(e))
        fetch('/api/brands')
                .then(response => response.json())
                .then(data => setListBrands(data.brands))
                .catch(e => console.log(e))
    }, [])

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Nombre: ' + data.name + '\nSección: ' + data.section + '\nColección: ' + data.collection + '\nMarca: ' + data.brand + '\nPrecio: ' + data.price + '\nDescuento: ' + data.discount + '\nDescripción: ' + data.description + '\nImagen: ' + data.image);
        fetch(`http://localhost:3000/api/products/edit/${product.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
        
        event.target.reset();
    }

    return (
        <div>

            {/* TÍTULO DE LA VISTA DE CREACIÓN */}
            <h2 className="title-edit-create-form">Editando el producto: {product.name}</h2>

                {/* FORMULARIO DE CREACIÓN */}
                <form action={`api/products/edit/${product.id}`} method="POST" encType="multipart/form-data" id="editProduct-form" onSubmit={handleSubmit}>

                    {/* INPUT DEL NOMBRE DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <label htmlFor="name" className="label-normal-input">Nombre del Producto:</label>
                        <input type="text" id="name" name="name" className="normal-input" placeholder="Ej: Teléfono iPhone 13" defaultValue={product.name} onChange={handleInputChange} />
                    </div>

                    {/* SELECT DEL LA SECCIÓN DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <h3 className="title-select-edit-create-form">Sección del Producto:</h3>
                        <select name="section" className="select-edit-create-form" id="section" onChange={handleInputChange}>
                            <option value="" disable='true'>Elegí una sección:</option>
                            { listSections.map((section, i) => {
                                return <option key={i} value={section.id}>{section.sectionName}</option> 
                            })}
                        </select>
                    </div>

                    {/* SELECT DE LA COLECCIÓN DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <h3 className="title-select-edit-create-form">Colección del Producto:</h3>
                        <select name="collection" className="select-edit-create-form" id='collection' onChange={handleInputChange}>
                            <option value="" disable='true'>Elegí una colección:</option>
                            { listCollections.map((collection, i) => {
                                return <option key={i} value={collection.id}>{collection.collectionName}</option> 
                            })}
                        </select>
                    </div>
                    
                    
                    {/* SELECT DE LA MARCA DEL PRODUCTO */}  
                    <div className="div-edit-create-form">
                        <h3 className="title-select-edit-create-form">Marca del Producto:</h3>
                        <select name="brand" className="select-edit-create-form" id="brand" onChange={handleInputChange}>
                            <option value="" disable='true'>Elegí una marca:</option>
                            { listBrands.map((brand, i) => {
                                return <option key={i} value={brand.id}>{brand.brandName}</option> 
                            })}
                        </select>
                    </div>

                    {/* INPUT DEL PRECIO DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <label htmlFor="price" className="label-normal-input">Precio del Producto:</label>
                        <input type="number" id="price" name="price" className="normal-input" placeholder="Ej: 12500" defaultValue={product.price} onChange={handleInputChange} />
                    </div>

                    {/* INPUT DEL DESCUENTO DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <label htmlFor="discount" className="label-normal-input">Descuento del Producto:</label>
                        <input type="number" id="discount" name="discount" className="normal-input" placeholder="Ej: 10" defaultValue={product.discount} onChange={handleInputChange} />
                    </div>

                    {/* TEXTAREA DE LA DESCRIPCIÓN DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <label htmlFor="description" className="label-normal-input">Descripción del Producto:</label>
                        <textarea name="description" id="description" className="textarea-edit-create-form" defaultValue={product.description} onChange={handleInputChange}></textarea>
                    </div>

                    {/* INPUT DE LA IMAGEN NUEVA DEL PRODUCTO */}
                    <div className="div-edit-create-form">
                        <label htmlFor="image" className="label-normal-input">Imagen del Producto:</label>
                        <div className="div-product-image">
                            <img src={"/img/products/" + product.image} className='productImage' id="productImage" />
                        </div>
                        <input type="file" id="image" name="image" className="normal-input image-input" defaultValue={product.image} onChange={handleInputChange} />
                    </div>

                    {/* BOTONES PARA CREAR UN PRODUCTO */}
                    <div className="buttons-edit-create-form">
                        <button type="submit" className="button-cart button-edit-create-form">Editar</button>
                    </div>

                </form>
        </div>
    )
}

export default EditProduct;