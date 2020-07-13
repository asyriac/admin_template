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
  CInvalidFeedback,
  CToaster,
  CToast,
  CToastHeader,
  CToastBody,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { connect } from "react-redux";
import { editTransaction } from "../../../actions/transactions";
import axios from "axios";
import { APIUrls } from "../../../services/api";

class AddTransaction extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        id: "",
        txn_id: "",
        date: "",
        txn_type: "",
        brand_friend_name: "",
        brand_friend_contact_number: "",
        customer_contact_number: "",
        business_contact_number: "",
        business_name: "",
        total_promotion_: "",
        transaction_value: "",
        business_commission_value: "",
        business_gst_value: "",
        business_due_amount: "",
        spending_balance_status: "",
        receipt_id: "",
        friendlyapp_invoice: "",
        friendly_incentive_value: "",
        friendly_gst_value: "",
        earning_balance_status: "",
        payment_id: "",
        brand_friend_voucher: "",
        withdrawal_mode_upidebt: "",
      },
      errors: {
        brand_friend_voucher: "",
      },
      toast: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        APIUrls.fetchSingleTransaction(this.props.match.params.id)
      );
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  handleChange = (e) => {
    const { id, value, type } = e.target;
    let errors = this.state.errors;
    switch (e.target.id) {
      case "brand_friend_voucher":
        errors.brand_friend_voucher = value.length < 5 ? "Cool" : "";
        break;
      default:
        break;
    }
    this.setState({
      errors,
      data: {
        ...this.state.data,
        [id]: isNaN(value) ? value : value.length === 0 ? "" : parseInt(value),
      },
    });
  };

  handleEditTransaction = (e) => {
    e.preventDefault();
    if (this.validateForm(this.state.errors)) {
      this.props.dispatch(
        this.props.editTransaction(this.props.match.params.id, this.state.data)
      );
      this.setState({
        toast: [...this.state.toast, 1],
      });
    }
  };
  render() {
    console.log(this.props.match.params.id);
    const {
      txn_id,
      date,
      txn_type,
      brand_friend_name,
      brand_friend_contact_number,
      customer_contact_number,
      business_contact_number,
      business_name,
      total_promotion_,
      transaction_value,
      business_commission_value,
      business_gst_value,
      business_due_amount,
      spending_balance_status,
      receipt_id,
      friendlyapp_invoice,
      friendly_incentive_value,
      friendly_gst_value,
      earning_balance_status,
      payment_id,
      brand_friend_voucher,
      withdrawal_mode_upidebt,
    } = this.state.data;
    return (
      <>
        <CCard>
          <CCardHeader>
            Transaction
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
                <CRow>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="brand_friend_contact_number">
                        Brand Friend Contact Number
                      </CLabel>
                      <CInput
                        id="brand_friend_contact_number"
                        placeholder="Enter brand friend contact number"
                        value={brand_friend_contact_number}
                        onChange={this.handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="customer_contact_number">
                        Customer Contact Number
                      </CLabel>
                      <CInput
                        id="customer_contact_number"
                        placeholder="Enter customer contact number"
                        value={customer_contact_number}
                        onChange={this.handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
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
                <CRow>
                  <CCol>
                    <CFormGroup>
                      <CLabel htmlFor="business_contact_number">
                        Business Contact Number
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
                      <CLabel htmlFor="total_promotion_">
                        Total Promotion %
                      </CLabel>
                      <CInput
                        id="total_promotion_"
                        placeholder="Enter total promotion %"
                        value={total_promotion_}
                        onChange={this.handleChange}
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="transaction_value">Transaction Value</CLabel>
                  <CInput
                    id="transaction_value"
                    placeholder="Enter transaction value"
                    value={transaction_value}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="business_commission_value">
                    Business Commission % + Value
                  </CLabel>
                  <CInput
                    id="business_commission_value"
                    placeholder="Enter business commission % + value"
                    value={business_commission_value}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="business_gst_value">
                    Business GST% + Value
                  </CLabel>
                  <CInput
                    id="business_gst_value"
                    placeholder="Enter business gst% + value"
                    value={business_gst_value}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="business_due_amount">
                    Business Due Amount
                  </CLabel>
                  <CInput
                    id="business_due_amount"
                    placeholder="Enter business due amount"
                    value={business_due_amount}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="spending_balance_status">
                    Spending Balance Status
                  </CLabel>
                  <CInput
                    id="spending_balance_status"
                    placeholder="Enter spending balance status"
                    value={spending_balance_status}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="receipt_id">Receipt ID</CLabel>
                  <CInput
                    id="receipt_id"
                    placeholder="Enter receipt id"
                    value={receipt_id}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="friendlyapp_invoice">
                    FriendlyApp Invoice#
                  </CLabel>
                  <CInput
                    id="friendlyapp_invoice"
                    placeholder="Enter friendlyapp invoice#"
                    value={friendlyapp_invoice}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="friendly_incentive_value">
                    Friendly Incentive % + Value
                  </CLabel>
                  <CInput
                    id="friendly_incentive_value"
                    placeholder="Enter friendly incentive % + value"
                    value={friendly_incentive_value}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="friendly_gst_value">
                    Friendly GST% + Value
                  </CLabel>
                  <CInput
                    id="friendly_gst_value"
                    placeholder="Enter friendly gst% + value"
                    value={friendly_gst_value}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="earning_balance_status">
                    Earning Balance Status
                  </CLabel>
                  <CInput
                    id="earning_balance_status"
                    placeholder="Enter earning balance status"
                    value={earning_balance_status}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="payment_id">Payment ID</CLabel>
                  <CInput
                    id="payment_id"
                    placeholder="Enter payment id"
                    value={payment_id}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="brand_friend_voucher">
                    Brand Friend voucher#
                  </CLabel>
                  <CInput
                    id="brand_friend_voucher"
                    placeholder="Enter brand friend voucher#"
                    value={brand_friend_voucher}
                    onChange={this.handleChange}
                    invalid={this.state.errors.brand_friend_voucher.length > 0}
                  />
                  <CInvalidFeedback>
                    Houston, we have a problem...
                  </CInvalidFeedback>
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel htmlFor="withdrawal_mode_upidebt">
                    Withdrawal Mode (UPI/Debt)
                  </CLabel>
                  <CInput
                    id="withdrawal_mode_upidebt"
                    placeholder="Enter withdrawal mode (upi/debt)"
                    value={withdrawal_mode_upidebt}
                    onChange={this.handleChange}
                  />
                </CFormGroup>
              </CCol>
            </CRow>
            <CToaster position="top-right">
              {this.state.toast.map((toast, key) => {
                return (
                  <CToast show={true} autohide={1500} fade={true}>
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
              onClick={this.handleEditTransaction}
            >
              <CIcon name="cil-scrubber" /> Submit
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
    editTransaction,
  };
};

export default connect(null, mapDispatchToProps)(AddTransaction);
