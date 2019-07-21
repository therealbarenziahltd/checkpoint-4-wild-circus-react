import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CommentaryForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}