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
    
    console.log(userUrl);
  if (isLoad) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {userUrl.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      {userUrl.map((user) => (
          <img src={user.image}/>
        ))}
    </div>
  );
        }
  /* return (
    <div>
        <br/>
        
        <h2>Ultimos usuarios agregados</h2>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>E-Mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Usuario 1</td>
          <td>Apellido</td>
          <td>usuario1@mail.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Usuario 2</td>
            <td>Apellido</td>
            <td>usuario2@mail.com</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Usuario 3</td>
            <td>Apellido</td>
            <td>usuario3@mail.com</td>
        </tr>
      </tbody>
    </Table>
    </div>
  ); */


export default StripedRowExample;
