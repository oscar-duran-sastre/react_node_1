import React from "react";
import { Button } from "reactstrap";

const ButtonWithSpinner = (props) => {
  return (
    <Button color="secondary" onClick={props.newClick}>
      Añadir usuario
    </Button>
  );
};

export default ButtonWithSpinner;
