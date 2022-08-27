import Table from 'react-bootstrap/Table';


function StripedRowExample() {
  return (
    <div>
        <h2>Ultimos productos agregados</h2>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Categoria</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Producto 1</td>
          <td>Categoria 1</td>
          <td>$ 2.302</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Producto 2</td>
            <td>Categoria 2</td>
            <td>$ 2.302</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Producto 3</td>
            <td>Categoria 3</td>
            <td>$ 2.302</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default StripedRowExample;