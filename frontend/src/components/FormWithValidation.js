import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
} from "reactstrap";

const FormWithValidation = (props) => {
  const [validName, setValidName] = useState();
  const [validEmail, setValidEmail] = useState();

  const handleChange = (event) => {
    console.log(event.target);
    props.title === "Nombre"
      ? checkName(event.target.value)
      : checkEmail(event.target.value);
  };

  const checkName = (name) =>
    setValidName(checkLength2To40(name) && checkString(name));

  const checkEmail = (email) =>
    setValidEmail(checkLength2To40(email) && checkEmailSchema(email));

  const checkLength2To40 = (str) => str.length >= 2 && str.length <= 40;

  const checkString = (str) => typeof str === "string";

  const checkEmailSchema = (str) => {
    const splitByAt = str.split("@");
    // const splitByDot = splitByAt[1].split(".");
    return setValidEmail(
      splitByAt.length === 2 && splitByAt[1].split(".").length === 3
    );
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">{props.title}</Label>
          <Input
            name={props.title}
            {...(undefined ? { valid: false } : { invalid: false })}
            onChange={(e) => handleChange(e)}
          />
          <FormFeedback valid>{props.successText}</FormFeedback>
          <FormText>{props.exampleText}</FormText>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormWithValidation;
