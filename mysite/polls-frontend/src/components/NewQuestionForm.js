import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewQuestionForm extends React.Component {
  state = {
    pk: 0,
    question_text: ""
  };

  componentDidMount() {
    if (this.props.question) {
      const {question_text} = this.props.question;
      this.setState({question_text});
    }
  }

  onChange = e => {
    this.setState({ [e.target.question_text]: e.target.value });
  };

  createQuestion = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editQuestion = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editQuestion : this.createQuestion}>
        <FormGroup>
          <Label for="name">Nameehehe:</Label>
          <Input
            type="text"
            question_text="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.question_text)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewQuestionForm;