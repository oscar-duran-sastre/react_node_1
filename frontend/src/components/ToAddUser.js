import React, { useState } from "react";
import FormWithValidation from "./FormWithValidation";
import ButtonWithSpinner from "./ButtonWithSpinner";
import toPostUser from "./../api/toPostUser";
import {
  checkLength,
  checkString,
  checkEmailSchema,
  checkPasswordSchema,
} from "../validiationFunctions/validationFunctions";

const ToAddUser = () => {
  const [user, setUser] = useState();
  const [validInput, setValidInput] = useState();

  const handleBlur = (e) => {
    e.preventDefault();
    console.log("Blur");
    console.log(e.target.value);
    e.target.name === "Nombre" ? checkName(e.target.value) : checkEmail(e.target.value);
  };

  const handleClick = (e, propertyName, propertyValue) => {
    e.preventDefault();
    console.log("Click");
    setUser({ ...user, [propertyName]: propertyValue });
    toPostUser(user);
    console.log(user);
    console.log(checkPasswordSchema("66dury99"));
  };

  const checkName = (name) => {
    const isValidName = checkLength(name, 2, 40) && checkString(name);
    setValidInput(isValidName);
    setUser("name", isValidName ? name : undefined);
  };

  const checkEmail = (email) => {
    const isValidEmail = checkLength(email, 2, 40) && checkEmailSchema(email);
    setValidInput(isValidEmail);
    setUser("email", isValidEmail ? email : undefined);
  };

  try {
  } catch (error) {}

  return (
    <div>
      <FormWithValidation
        title="Nombre"
        exampleText="Introduzca un nombre"
        failureText="Lo sentimos, ese nombre ya existe"
        submit={(e) => handleClick(e)}
        newBlur={(e) => handleBlur(e)}
      />
      <FormWithValidation
        title="Email"
        exampleText="Introduzca un email"
        failureText="Lo sentimos, no se reconoce el formato del email"
        submit={(e) => handleClick(e)}
        newBlur={(e) => handleBlur(e)}
      />
      <ButtonWithSpinner title={"Añadir usuario"} newClick={(e) => handleClick(e)} />
    </div>
  );
};

export default ToAddUser;
