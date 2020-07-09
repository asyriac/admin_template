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
import { addCategory } from "../../../actions/categories";

class AddCategory extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      parent: "",
      sub: "",
      description: "",
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

  handleAddCategory = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addCategory(this.state));
    this.setState({
      id: "",
      parent: "",
      sub: "",
      description: "",
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
      parent,
      sub,
      description,
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
            Category
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="parent">Parent</CLabel>
              <CInput
                id="parent"
                placeholder="Enter parent"
                value={parent}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="sub">Sub</CLabel>
              <CInput
                id="sub"
                placeholder="Enter sub"
                value={sub}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="description">Description</CLabel>
              <CInput
                id="description"
                placeholder="Enter description"
                value={description}
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
              onClick={this.handleAddCategory}
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
    addCategory,
  };
};

export default connect(null, mapDispatchToProps)(AddCategory);
