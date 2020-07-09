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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { addFranchise } from "../../../actions/franchises";

class AddFranchise extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      user_id: "",
      business_id: "",
      is_active: false,
      created_by: "",
      updated_by: "",
      created_on: "",
      updated_on: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddFranchise = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addFranchise(this.state));
    this.setState({
      id: "",
      user_id: "",
      business_id: "",
      is_active: false,
      created_by: "",
      updated_by: "",
      created_on: "",
      updated_on: "",
    });
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
    } = this.state;
    return (
      <>
        <CCard>
          <CCardHeader>
            Franchise
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="user_id">User Id</CLabel>
              <CInput
                id="user_id"
                placeholder="Enter user id"
                value={user_id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_id">Business Id</CLabel>
              <CInput
                id="business_id"
                placeholder="Enter business id"
                value={business_id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="is_active">Is Active</CLabel>
              <CSwitch
                className="mx-2 pt-1"
                color="dark"
                value={is_active}
                onClick={this.handleIsActive}
                shape="pill"
                checked={is_active}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="created_by">Created By</CLabel>
              <CInput
                id="created_by"
                placeholder="Enter created by"
                value={created_by}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="updated_by">Updated By</CLabel>
              <CInput
                id="updated_by"
                placeholder="Enter updated by"
                value={updated_by}
                onChange={this.handleChange}
              />
            </CFormGroup>
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
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleAddFranchise}
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
    addFranchise,
  };
};

export default connect(null, mapDispatchToProps)(AddFranchise);
