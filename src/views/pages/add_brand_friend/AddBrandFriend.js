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
import { addBrandFriend } from "../../../actions/brandfriends";

class AddBrandFriend extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      brand_friend_name: "",
      brand_friend_number: "",
      total_invited_listed_businesses: "",
      brand_friend_rating_avg_ratings_received_by_business: "",
      total_wom_referrals_sent: "",
      referral_conversion_rating: "",
      total_business_value_generated: "",
      total_wom_earnings: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleAddBrandFriend = (e) => {
    e.preventDefault();

    this.props.dispatch(this.props.addBrandFriend(this.state));
    this.setState({
      id: "",
      brand_friend_name: "",
      brand_friend_number: "",
      total_invited_listed_businesses: "",
      brand_friend_rating_avg_ratings_received_by_business: "",
      total_wom_referrals_sent: "",
      referral_conversion_rating: "",
      total_business_value_generated: "",
      total_wom_earnings: "",
    });
  };
  render() {
    const {
      brand_friend_name,
      brand_friend_number,
      total_invited_listed_businesses,
      brand_friend_rating_avg_ratings_received_by_business,
      total_wom_referrals_sent,
      referral_conversion_rating,
      total_business_value_generated,
      total_wom_earnings,
    } = this.state;
    return (
      <>
        <CCard>
          <CCardHeader>
            BrandFriend
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
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
              <CLabel htmlFor="brand_friend_number">Brand Friend Number</CLabel>
              <CInput
                id="brand_friend_number"
                placeholder="Enter brand friend number"
                value={brand_friend_number}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="total_invited_listed_businesses">
                Total Invited & Listed Businesses
              </CLabel>
              <CInput
                id="total_invited_listed_businesses"
                placeholder="Enter total invited & listed businesses"
                value={total_invited_listed_businesses}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="brand_friend_rating_avg_ratings_received_by_business">
                Brand Friend Rating (Avg ratings received by Business)
              </CLabel>
              <CInput
                id="brand_friend_rating_avg_ratings_received_by_business"
                placeholder="Enter brand friend rating (avg ratings received by business)"
                value={brand_friend_rating_avg_ratings_received_by_business}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="total_wom_referrals_sent">
                Total WOM referrals sent
              </CLabel>
              <CInput
                id="total_wom_referrals_sent"
                placeholder="Enter total wom referrals sent"
                value={total_wom_referrals_sent}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="referral_conversion_rating">
                Referral Conversion Rating%
              </CLabel>
              <CInput
                id="referral_conversion_rating"
                placeholder="Enter referral conversion rating%"
                value={referral_conversion_rating}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="total_business_value_generated">
                Total Business Value Generated
              </CLabel>
              <CInput
                id="total_business_value_generated"
                placeholder="Enter total business value generated"
                value={total_business_value_generated}
                onChange={this.handleChange}
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="total_wom_earnings">Total WOM Earnings</CLabel>
              <CInput
                id="total_wom_earnings"
                placeholder="Enter total wom earnings"
                value={total_wom_earnings}
                onChange={this.handleChange}
              />
            </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              size="sm"
              color="primary"
              onClick={this.handleAddBrandFriend}
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
    addBrandFriend,
  };
};

export default connect(null, mapDispatchToProps)(AddBrandFriend);
