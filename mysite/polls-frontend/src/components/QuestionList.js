import React, { Component } from "react";
import { Table } from "reactstrap";
import NewQuestionModal from "./NewQuestionModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class QuestionList extends Component {
  render() {
    const questions = this.props.questions;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Question</th>
            <th>Published</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!questions || questions.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            questions.map(question => (
              <tr key={question.pk}>
                <td>{question.question_text}</td>
                <td>{question.pub_date}</td>
                <td align="center">
                  <NewQuestionModal
                    create={false}
                    question={question}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={question.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default QuestionList;