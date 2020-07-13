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
import { editBanner } from "../../../actions/banners";

import axios from "axios";
import { APIUrls } from "../../../services/api";

class EditBanner extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        id: "",
        upload_date_time: "",
        business_name: "",
        business_contact_number: "",
        promotion_status_activeinactiverestrictedhide: "",
      },
    };
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        APIUrls.fetchSingleBanner(this.props.match.params.id)
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

  handleEditBanner = (e) => {
    e.preventDefault();

    this.props.dispatch(
      this.props.editBanner(this.props.match.params.id, this.state.data)
    );
  };
  render() {
    const {
      upload_date_time,
      business_name,
      business_contact_number,
      promotion_status_activeinactiverestrictedhide,
    } = this.state.data;
    return (
      <>
        <CCard>
          <CCardHeader>
            Banner
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="upload_date_time">Upload Date & Time</CLabel>
                  <CInput
                    id="upload_date_time"
                    placeholder="Enter upload date & time"
                    value={upload_date_time}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
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
            </CRow>
            <CRow>
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
              <CCol>
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
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleEditBanner}
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
    editBanner,
  };
};

export default connect(null, mapDispatchToProps)(EditBanner);
