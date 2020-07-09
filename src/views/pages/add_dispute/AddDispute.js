import React, { Component } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { addDispute } from "../../../actions/disputes";

class AddDispute extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      txn_id: "",
      date: "",
      txn_type: "",
      dispute_id: "",
      business_name: "",
      business_contact_number: "",
      brand_friend_name: "",
      brand_friend_contact_number: "",
      dispute_type: "",
      dispute_details: "",
      admin_comments: "",
      admin_validation_status: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddDispute = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addDispute(this.state));
    this.setState({
      id: "",
      txn_id: "",
      date: "",
      txn_type: "",
      dispute_id: "",
      business_name: "",
      business_contact_number: "",
      brand_friend_name: "",
      brand_friend_contact_number: "",
      dispute_type: "",
      dispute_details: "",
      admin_comments: "",
      admin_validation_status: "",
    });
  };
  render() {
    const {
      txn_id,
      date,
      txn_type,
      dispute_id,
      business_name,
      business_contact_number,
      brand_friend_name,
      brand_friend_contact_number,
      dispute_type,
      dispute_details,
      admin_comments,
      admin_validation_status,
    } = this.state;
    return (
      <>
        <CCard>
          <CCardHeader>
            Dispute
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="txn_id">Txn ID</CLabel>
              <CInput
                id="txn_id"
                placeholder="Enter txn id"
                value={txn_id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="date">Date</CLabel>
              <CInput
                id="date"
                placeholder="Enter date"
                value={date}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="txn_type">Txn Type</CLabel>
              <CInput
                id="txn_type"
                placeholder="Enter txn type"
                value={txn_type}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="dispute_id">Dispute ID</CLabel>
              <CInput
                id="dispute_id"
                placeholder="Enter dispute id"
                value={dispute_id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_name">Business Name</CLabel>
              <CInput
                id="business_name"
                placeholder="Enter business name"
                value={business_name}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_contact_number">
                Business Contact number
              </CLabel>
              <CInput
                id="business_contact_number"
                placeholder="Enter business contact number"
                value={business_contact_number}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_name">Brand Friend Name</CLabel>
              <CInput
                id="brand_friend_name"
                placeholder="Enter brand friend name"
                value={brand_friend_name}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_contact_number">
                Brand Friend Contact number
              </CLabel>
              <CInput
                id="brand_friend_contact_number"
                placeholder="Enter brand friend contact number"
                value={brand_friend_contact_number}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="dispute_type">Dispute Type</CLabel>
              <CInput
                id="dispute_type"
                placeholder="Enter dispute type"
                value={dispute_type}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="dispute_details">Dispute Details</CLabel>
              <CInput
                id="dispute_details"
                placeholder="Enter dispute details"
                value={dispute_details}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="admin_comments">Admin Comments</CLabel>
              <CInput
                id="admin_comments"
                placeholder="Enter admin comments"
                value={admin_comments}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="admin_validation_status">
                Admin Validation Status
              </CLabel>
              <CInput
                id="admin_validation_status"
                placeholder="Enter admin validation status"
                value={admin_validation_status}
                onChange={this.handleChange}
              />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleAddDispute}
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
    addDispute,
  };
};

export default connect(null, mapDispatchToProps)(AddDispute);
