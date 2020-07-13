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
  CRow,
  CCol,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { editDispute } from "../../../actions/disputes";
import axios from "axios";
import { APIUrls } from "../../../services/api";

class EditDispute extends Component {
  constructor() {
    super();
    this.state = {
      data: {
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
      },
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        APIUrls.fetchSingleDispute(this.props.match.params.id)
      );
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleEditDispute = (e) => {
    e.preventDefault();

    this.props.dispatch(
      this.props.editDispute(this.props.match.params.id, this.state.data)
    );
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
    } = this.state.data;
    return (
      <>
        <CCard>
          <CCardHeader>
            Dispute
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="txn_id">Txn ID</CLabel>
                  <CInput
                    id="txn_id"
                    placeholder="Enter txn id"
                    value={txn_id}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="date">Date</CLabel>
                  <CInput
                    id="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="txn_type">Txn Type</CLabel>
                  <CInput
                    id="txn_type"
                    placeholder="Enter txn type"
                    value={txn_type}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="dispute_id">Dispute ID</CLabel>
                  <CInput
                    id="dispute_id"
                    placeholder="Enter dispute id"
                    value={dispute_id}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="business_name">Business Name</CLabel>
                  <CInput
                    id="business_name"
                    placeholder="Enter business name"
                    value={business_name}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
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
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="brand_friend_name">Brand Friend Name</CLabel>
                  <CInput
                    id="brand_friend_name"
                    placeholder="Enter brand friend name"
                    value={brand_friend_name}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
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
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="dispute_type">Dispute Type</CLabel>
                  <CInput
                    id="dispute_type"
                    placeholder="Enter dispute type"
                    value={dispute_type}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="dispute_details">Dispute Details</CLabel>
                  <CInput
                    id="dispute_details"
                    placeholder="Enter dispute details"
                    value={dispute_details}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="admin_comments">Admin Comments</CLabel>
                  <CInput
                    id="admin_comments"
                    placeholder="Enter admin comments"
                    value={admin_comments}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
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
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleEditDispute}
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
    editDispute,
  };
};

export default connect(null, mapDispatchToProps)(EditDispute);
