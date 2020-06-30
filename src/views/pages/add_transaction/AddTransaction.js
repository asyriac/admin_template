import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CCol,
  CCardFooter,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { addTransaction } from "../../../actions/transactions";

class AddTransaction extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      id: "",
      title: "",
      body: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddTransaction = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addTransaction(this.state));
    this.setState({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };
  render() {
    const { userId, id, title, body } = this.state;
    return (
      <>
        <CCard>
          <CCardHeader>
            Transaction
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="company">User Id</CLabel>
              <CInput
                id="userId"
                placeholder="Enter your user id"
                value={userId}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="vat">ID</CLabel>
              <CInput
                id="id"
                placeholder="ID"
                value={id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="street">Title</CLabel>
              <CInput
                id="title"
                placeholder="Enter title"
                value={title}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="street">Body</CLabel>
              <CInput
                id="body"
                placeholder="Enter body"
                value={body}
                onChange={this.handleChange}
              />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleAddTransaction}
            >
              <CIcon name="cil-scrubber" /> Submit
            </CButton>{" "}
            <CButton type="reset" size="sm" color="danger">
              <CIcon name="cil-ban" /> Reset
            </CButton>
          </CCardFooter>
        </CCard>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    addTransaction,
  };
};

export default connect(null, mapDispatchToProps)(AddTransaction);
