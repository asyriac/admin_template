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
import { addBanner } from "../../../actions/banners";

class AddBanner extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      upload_date_time: "",
      business_name: "",
      business_contact_number: "",
      promotion_status_activeinactiverestrictedhide: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddBanner = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addBanner(this.state));
    this.setState({
      id: "",
      upload_date_time: "",
      business_name: "",
      business_contact_number: "",
      promotion_status_activeinactiverestrictedhide: "",
    });
  };
  render() {
    const {
      upload_date_time,
      business_name,
      business_contact_number,
      promotion_status_activeinactiverestrictedhide,
    } = this.state;
    return (
      <>
        <CCard>
          <CCardHeader>
            Banner
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="upload_date_time">Upload Date & Time</CLabel>
              <CInput
                id="upload_date_time"
                placeholder="Enter upload date & time"
                value={upload_date_time}
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
              <CLabel htmlFor="promotion_status_activeinactiverestrictedhide">
                Promotion Status (Active/InActive/Restricted/Hide)
              </CLabel>
              <CInput
                id="promotion_status_activeinactiverestrictedhide"
                placeholder="Enter promotion status (active/inactive/restricted/hide)"
                value={promotion_status_activeinactiverestrictedhide}
                onChange={this.handleChange}
              />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleAddBanner}
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
    addBanner,
  };
};

export default connect(null, mapDispatchToProps)(AddBanner);
