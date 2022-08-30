import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";

function StripedRowExample() {

  const [isLoad, setLoad] = useState(true);
  const [userUrl, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((user) => {

      
        setUser(user.users);
        setLoad(false);
        
      });
    }, []);
    
   if (isLoad) {
    return (
      <div className="container col-md-6">
        <h1>Cargando...</h1>
      </div>
    );
  }else{
    return (
      <div className="container col-md-6">
      <br/>
        <h2>Lista de usuarios</h2>
      <br/> 
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Rol</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { userUrl.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td><a href="#">Ir a Detalle</a></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
   
  );
}
      }


export default StripedRowExample;
