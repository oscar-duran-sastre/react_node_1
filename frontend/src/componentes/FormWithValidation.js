import React from "react";
import {
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
} from "reactstrap";

const FormWithValidation = (props) => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">{props.title}</Label>
          <Input />
          <FormText>{props.exampleText}</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">{props.title}</Label>
          <Input valid />
          <FormFeedback valid>{props.successText}</FormFeedback>
          <FormText>{props.exampleText}</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">{props.title}</Label>
          <Input invalid />
          <FormFeedback>{props.failureText}</FormFeedback>
          <FormText>{props.exampleText}</FormText>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormWithValidation;
