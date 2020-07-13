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
  CToaster,
  CToast,
  CToastHeader,
  CToastBody,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { editCategory } from "../../../actions/categories";
import axios from "axios";
import { APIUrls } from "../../../services/api";

class EditCategory extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        id: "",
        parent: "",
        sub: "",
        description: "",
        is_active: true,
        created_by: "",
        updated_by: "",
        created_on: "",
        updated_on: "",
      },
      toast: [],
    };
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        APIUrls.fetchSingleCategory(this.props.match.params.id)
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

  handleEditCategory = (e) => {
    e.preventDefault();
    this.props.dispatch(
      this.props.editCategory(this.props.match.params.id, this.state.data)
    );
    this.setState({
      toast: [...this.state.toast, 1],
    });
  };

  handleIsActive = () => {
    const { is_active } = this.state;
    this.setState({
      is_active: !is_active,
    });
  };

  render() {
    console.log(this.state);
    const {
      parent,
      sub,
      description,
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
            Category
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
              />
            </CFormGroup> */}
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="parent">Parent</CLabel>
                  <CInput
                    id="parent"
                    placeholder="Enter parent"
                    value={parent}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="sub">Sub</CLabel>
                  <CInput
                    id="sub"
                    placeholder="Enter sub"
                    value={sub}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="description">Description</CLabel>
                  <CInput
                    id="description"
                    placeholder="Enter description"
                    value={description}
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
            <CToaster position="top-right">
              {this.state.toast.map((toast, key) => {
                return (
                  <CToast show={true} autohide={5000} fade={true}>
                    <CToastHeader closeButton={toast.closeButton}>
                      Alert
                    </CToastHeader>
                    <CToastBody>Edited successfully! </CToastBody>
                  </CToast>
                );
              })}
            </CToaster>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleEditCategory}
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
    editCategory,
  };
};

export default connect(null, mapDispatchToProps)(EditCategory);
