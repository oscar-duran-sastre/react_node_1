import React from "react";
import { Button } from "reactstrap";

const ButtonWithSpinner = (props) => {
  return (
    <Button type="button" color="secondary" onClick={props.newClick}>
      {props.title}
    </Button>
  );
};

export default ButtonWithSpinner;
