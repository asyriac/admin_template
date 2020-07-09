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
import { addUser } from "../../../actions/users";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      user_id: "",
      brand_friend_registered_date: "",
      brand_friend_name: "",
      brand_friend_contact_number: "",
      brand_friend_email_id: "",
      brand_friend_my_invite_number: "",
      brand_friend_referrer_contact: "",
      brand_friend_billing_address: "",
      city: "",
      brand_friend_pincode: "",
      enrolled_business_yesno: "",
      business_referrer_contact: "",
      business_gst: "",
      business_name: "",
      country: "",
      business_billing_address: "",
      area: "",
      city_2: "",
      business_pincode: "",
      category: "",
      keywords: "",
      website: "",
      venue_map: "",
      estd_on: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddUser = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addUser(this.state));
    this.setState({
      id: "",
      user_id: "",
      brand_friend_registered_date: "",
      brand_friend_name: "",
      brand_friend_contact_number: "",
      brand_friend_email_id: "",
      brand_friend_my_invite_number: "",
      brand_friend_referrer_contact: "",
      brand_friend_billing_address: "",
      city: "",
      brand_friend_pincode: "",
      enrolled_business_yesno: "",
      business_referrer_contact: "",
      business_gst: "",
      business_name: "",
      country: "",
      business_billing_address: "",
      area: "",
      city_2: "",
      business_pincode: "",
      category: "",
      keywords: "",
      website: "",
      venue_map: "",
      estd_on: "",
    });
  };
  render() {
    const {
      user_id,
      brand_friend_registered_date,
      brand_friend_name,
      brand_friend_contact_number,
      brand_friend_email_id,
      brand_friend_my_invite_number,
      brand_friend_referrer_contact,
      brand_friend_billing_address,
      city,
      brand_friend_pincode,
      enrolled_business_yesno,
      business_referrer_contact,
      business_gst,
      business_name,
      country,
      business_billing_address,
      area,
      city_2,
      business_pincode,
      category,
      keywords,
      website,
      venue_map,
      estd_on,
    } = this.state;
    return (
      <>
        <CCard>
          <CCardHeader>
            User
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="user_id">User ID</CLabel>
              <CInput
                id="user_id"
                placeholder="Enter user id"
                value={user_id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_registered_date">
                Brand Friend Registered Date
              </CLabel>
              <CInput
                id="brand_friend_registered_date"
                placeholder="Enter brand friend registered date"
                value={brand_friend_registered_date}
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
              <CLabel htmlFor="brand_friend_email_id">
                Brand Friend Email ID
              </CLabel>
              <CInput
                id="brand_friend_email_id"
                placeholder="Enter brand friend email id"
                value={brand_friend_email_id}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_my_invite_number">
                Brand Friend My Invite Number
              </CLabel>
              <CInput
                id="brand_friend_my_invite_number"
                placeholder="Enter brand friend my invite number"
                value={brand_friend_my_invite_number}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_referrer_contact">
                Brand Friend Referrer Contact#
              </CLabel>
              <CInput
                id="brand_friend_referrer_contact"
                placeholder="Enter brand friend referrer contact#"
                value={brand_friend_referrer_contact}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_billing_address">
                Brand Friend Billing Address
              </CLabel>
              <CInput
                id="brand_friend_billing_address"
                placeholder="Enter brand friend billing address"
                value={brand_friend_billing_address}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="city">City</CLabel>
              <CInput
                id="city"
                placeholder="Enter city"
                value={city}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_pincode">
                Brand Friend PINCODE
              </CLabel>
              <CInput
                id="brand_friend_pincode"
                placeholder="Enter brand friend pincode"
                value={brand_friend_pincode}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="enrolled_business_yesno">
                Enrolled Business (Yes/No)
              </CLabel>
              <CInput
                id="enrolled_business_yesno"
                placeholder="Enter enrolled business (yes/no)"
                value={enrolled_business_yesno}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_referrer_contact">
                Business Referrer Contact#
              </CLabel>
              <CInput
                id="business_referrer_contact"
                placeholder="Enter business referrer contact#"
                value={business_referrer_contact}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_gst">Business GST#</CLabel>
              <CInput
                id="business_gst"
                placeholder="Enter business gst#"
                value={business_gst}
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
              <CLabel htmlFor="country">Country</CLabel>
              <CInput
                id="country"
                placeholder="Enter country"
                value={country}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_billing_address">
                Business Billing Address
              </CLabel>
              <CInput
                id="business_billing_address"
                placeholder="Enter business billing address"
                value={business_billing_address}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="area">Area</CLabel>
              <CInput
                id="area"
                placeholder="Enter area"
                value={area}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="city">City</CLabel>
              <CInput
                id="city_2"
                placeholder="Enter city"
                value={city_2}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="business_pincode">Business PINCODE</CLabel>
              <CInput
                id="business_pincode"
                placeholder="Enter business pincode"
                value={business_pincode}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="category">Category</CLabel>
              <CInput
                id="category"
                placeholder="Enter category"
                value={category}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="keywords">Keywords</CLabel>
              <CInput
                id="keywords"
                placeholder="Enter keywords"
                value={keywords}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="website">Website</CLabel>
              <CInput
                id="website"
                placeholder="Enter website"
                value={website}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="venue_map">Venue Map</CLabel>
              <CInput
                id="venue_map"
                placeholder="Enter venue map"
                value={venue_map}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="estd_on">Estd On</CLabel>
              <CInput
                id="estd_on"
                placeholder="Enter estd on"
                value={estd_on}
                onChange={this.handleChange}
              />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleAddUser}
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
    addUser,
  };
};

export default connect(null, mapDispatchToProps)(AddUser);
