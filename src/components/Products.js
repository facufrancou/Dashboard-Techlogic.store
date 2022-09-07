import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "../assets/styles.css";

function Products() {
  let [isLoad, setLoad] = useState(true);
  let [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setListProducts(data.products);
        setLoad(false);
      })
      .catch((e) => console.log(e));
  }, []);

  if (isLoad) {
    return (
      <div className="container col-md-1">
        <br />
        <br />
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div className="container col-md-12">
        <br />
        <div className="container col-md-2">
          <Link
            to={{
              pathname: `/products/create`,
            }}
            className="link-button-create"
          >
            <Button variant="primary">Crear Producto</Button>
          </Link>
        </div>
        <br />
        <h2>Lista de productos</h2>
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Descuento</th>
              <th>Descripción</th>
              <th>En Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listProducts.map((product, i) => {
                return (
                <tr key={i}>
                  <td>{product.id}</td>
                  <td>{product.brand}</td>
                  <td>$ {product.price}</td>
                  <td>{product.discount} %</td>
                  <td>{product.description}</td>
                  <td className="deleted">{product.deleted === true ? "No" : "Sí"}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/products/${product.id}`,
                      }}
                    >
                      Ver detalle
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Products;
