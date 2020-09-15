import React from "react";
import FormWithValidation from "./FormWithValidation";
import ButtonWithSpinner from "./ButtonWithSpinner";

const Login = () => {
  const handleBlur = (e) => e.preventDefault();

  const handleClick = (e, propertyName, propertyValue) => {
    e.preventDefault();
  };

  return (
    <div>
      <FormWithValidation
        title="Email"
        exampleText="Introduzca su email"
        failureText="Lo sentimos, no se reconoce el formato del email"
        submit={(e) => handleClick(e)}
        newBlur={(e) => handleBlur(e)}
      />
      <FormWithValidation
        title="Password"
        exampleText="Introduzca su password"
        failureText="Lo sentimos, no se reconoce el formato de la contraseña"
        submit={(e) => handleClick(e)}
        newBlur={(e) => handleBlur(e)}
      />
      <ButtonWithSpinner title={"Acceder"} newClick={(e) => handleClick(e)} />
    </div>
  );
};

export default Login;

// Parte 3.1:
// Añadir una pantalla de login para que el usuario se conecte según el POST /login del challenge.
// La llamada de "login" nos devuelve el "id" del usuario encontrado.
// Almacenar en Redux en el slice "session" los datos del usuario que está logado.
// En base a esos datos aplicar un renderizado condicional en el header para que en lugar de mostrar el botón
// "Sign In", muestre el nombre del usuario y un botón de "logout" para desconectar al usuario.
// Una vez logado, redirigir a la home.
