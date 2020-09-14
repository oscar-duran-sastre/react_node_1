import React, { useEffect } from "react";
import { Table } from "reactstrap";
import toGetUsers from "../api/toGetUsers";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { findStarted, findSuccess, selectIsLoading, selectUsersList } from "../redux/users/usersSlice";

const ToListUsers = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsersList);

  const fetchData = async () => {
    dispatch(findStarted());
    const data = await toGetUsers();
    console.log(data);
    dispatch(findSuccess(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Spinner type="grow" color="dark" />
          <span> Un momento mientras termina de cargarse la información</span>
        </div>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>Nombre: </th>
              <th>Email: </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id + user.name}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ToListUsers;
