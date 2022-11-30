import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import QuestionList from "./QuestionList";
import NewQuestionModal from "./NewQuestionModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    questions: []
  };

  componentDidMount() {
    this.resetState();
  }

  getQuestions = () => {
    axios.get(API_URL).then(res => this.setState({ questions: res.data }));
  };

  resetState = () => {
    this.getQuestions();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <QuestionList
              questions={this.state.questions}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewQuestionModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;