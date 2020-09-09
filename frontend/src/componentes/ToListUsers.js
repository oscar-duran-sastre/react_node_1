import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import toGetUsers from "./api/toGetUsers";
import { Spinner } from "reactstrap";

const ToListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    wait();
  }, []);

  const wait = async () => {
    const usersData = await toGetUsers();
    console.log(usersData);
    setUsers(usersData);
  };

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Nombre: </th>
            <th>Email: </th>
          </tr>
        </thead>
        <tbody>
          {users === undefined ? (
            <>
              <Spinner type="grow" color="dark" />
              <span>
                Un momento mientras termina de cargarse la información
              </span>
            </>
          ) : (
            users.map((value) => {
              return (
                <>
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                  </tr>
                </>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ToListUsers;
