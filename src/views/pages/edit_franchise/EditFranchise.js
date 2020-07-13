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
  CSwitch,
  CRow,
  CCol,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { editFranchise } from "../../../actions/franchises";
import axios from "axios";
import { APIUrls } from "../../../services/api";

class EditFranchise extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        id: "",
        user_id: "",
        business_id: "",
        is_active: false,
        created_by: "",
        updated_by: "",
        created_on: "",
        updated_on: "",
      },
    };
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        APIUrls.fetchSingleFranchise(this.props.match.params.id)
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

  handleEditFranchise = (e) => {
    e.preventDefault();

    this.props.dispatch(
      this.props.editFranchise(this.props.match.params.id, this.state.data)
    );
  };
  handleIsActive = () => {
    const { is_active } = this.state;
    this.setState({
      is_active: !is_active,
    });
  };
  render() {
    const {
      user_id,
      business_id,
      is_active,
      created_by,
      updated_by,
      created_on,
      updated_on,
    } = this.state.data;
    return (
      <>
        <CCard>
          <CCardHeader>
            Franchise
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            {/* <CFormGroup>
              <CLabel htmlFor="is_active">Is Active</CLabel>
              <CSwitch
                className="mx-2 pt-1"
                color="dark"
                value={is_active}
                onClick={this.handleIsActive}
                shape="pill"
                checked={is_active}
              />
            </CFormGroup> */}
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="user_id">User Id</CLabel>
                  <CInput
                    id="user_id"
                    placeholder="Enter user id"
                    value={user_id}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="business_id">Business Id</CLabel>
                  <CInput
                    id="business_id"
                    placeholder="Enter business id"
                    value={business_id}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            {/* <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="created_by">Created By</CLabel>
                  <CInput
                    id="created_by"
                    placeholder="Enter created by"
                    value={created_by}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="updated_by">Updated By</CLabel>
                  <CInput
                    id="updated_by"
                    placeholder="Enter updated by"
                    value={updated_by}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="created_on">Created On</CLabel>
                  <CInput
                    id="created_on"
                    placeholder="Enter created on"
                    value={created_on}
                    onChange={this.handleChange}
                    type="date"
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="updated_on">Updated On</CLabel>
                  <CInput
                    type="date"
                    id="updated_on"
                    name="date-input"
                    placeholder="Enter updated on"
                    value={updated_on}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow> */}
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleEditFranchise}
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
    editFranchise,
  };
};

export default connect(null, mapDispatchToProps)(EditFranchise);
