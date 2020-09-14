import React from "react";
import { Form, FormGroup, FormText, Label, Input } from "reactstrap";

const FormWithValidation = (props) => {
  return (
    <div>
      <Form>
        <FormGroup onBlur={props.newBlur}>
          <Label for="exampleEmail">{props.title}</Label>
          <Input invalid={props.isValid} />
          <FormText>{props.exampleText}</FormText>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormWithValidation;
