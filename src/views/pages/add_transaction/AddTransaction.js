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

class AddTransaction extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            Company
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="company">Company</CLabel>
              <CInput id="company" placeholder="Enter your company name" />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="vat">VAT</CLabel>
              <CInput id="vat" placeholder="DE1234567890" />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="street">Street</CLabel>
              <CInput id="street" placeholder="Enter street name" />
            </CFormGroup>
            <CFormGroup row className="my-0">
              <CCol xs="8">
                <CFormGroup>
                  <CLabel htmlFor="city">City</CLabel>
                  <CInput id="city" placeholder="Enter your city" />
                </CFormGroup>
              </CCol>
              <CCol xs="4">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Postal Code</CLabel>
                  <CInput id="postal-code" placeholder="Postal Code" />
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="country">Country</CLabel>
              <CInput id="country" placeholder="Country name" />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary">
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

export default AddTransaction;
