import React from "react";
import FormWithValidation from "./FormWithValidation";
import ButtonWithSpinner from "./ButtonWithSpinner";

const ToAddUser = (props) => {
  return (
    <div>
      <FormWithValidation
        title="Nombre"
        exampleText="Introduzca un nombre"
        successText="Nombre disponible"
        failureText="Lo sentimos, ese nombre ya existe"
      />
      <FormWithValidation
        title="Email"
        exampleText="Introduzca un email"
        successText="Email disponible"
        failureText="Lo sentimos, no se reconoce el formato del email"
      />
      <ButtonWithSpinner />
    </div>
  );
};

export default ToAddUser;
