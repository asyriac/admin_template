import React from "react";

import { CSVLink } from "react-csv";

import {
  CInput,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CFormGroup,
  CLabel,
  CModalFooter,
} from "@coreui/react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import lodash from "lodash";

import { connect } from "react-redux";
import {
  getTransactions,
  editTransaction,
  deleteTransaction,
} from "../../../actions/transactions";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      editID: null,
      page: 0,
      rowsPerPage: 5,
      columnToSort: "",
      sortDirection: "asc",
    };
  }

  async componentDidMount() {
    this.props.dispatch(this.props.getTransactions());
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleEdit = (id) => {
    console.log(id);
    this.props.history.push(`/transactions/edit/${id}`);
  };

  handleDelete = (id) => {
    this.props.dispatch(this.props.deleteTransaction(id));
  };
  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: event.target.value,
      page: 0,
    });
  };

  invertDirection = {
    asc: "desc",
    desc: "asc",
  };

  handleSort = (columnName) => {
    this.setState({
      columnToSort: columnName,
      sortDirection:
        this.state.columnToSort === columnName
          ? this.invertDirection[this.state.sortDirection]
          : "asc",
    });
  };

  render() {
    const headers = [
      { label: "Id", key: "id" },
      { label: "Txn ID", key: "txn_id" },
      { label: "Date", key: "date" },
      { label: "Txn Type", key: "txn_type" },
      { label: "Brand Friend Name", key: "brand_friend_name" },
      {
        label: "Brand Friend Contact Number",
        key: "brand_friend_contact_number",
      },
      { label: "Customer Contact Number", key: "customer_contact_number" },
      { label: "Business Contact Number", key: "business_contact_number" },
      { label: "Business Name", key: "business_name" },
      { label: "Total Promotion %", key: "total_promotion_" },
      { label: "Transaction Value", key: "transaction_value" },
      {
        label: "Business Commission % + Value",
        key: "business_commission_value",
      },
      { label: "Business GST% + Value", key: "business_gst_value" },
      { label: "Business Due Amount", key: "business_due_amount" },
      { label: "Spending Balance Status", key: "spending_balance_status" },
      { label: "Receipt ID", key: "receipt_id" },
      { label: "FriendlyApp Invoice#", key: "friendlyapp_invoice" },
      {
        label: "Friendly Incentive % + Value",
        key: "friendly_incentive_value",
      },
      { label: "Friendly GST% + Value", key: "friendly_gst_value" },
      { label: "Earning Balance Status", key: "earning_balance_status" },
      { label: "Payment ID", key: "payment_id" },
      { label: "Brand Friend voucher#", key: "brand_friend_voucher" },
      { label: "Withdrawal Mode (UPI/Debt)", key: "withdrawal_mode_upidebt" },
    ];
    const { data } = this.props;
    const { searchInput } = this.state;
    let filteredData = data.filter((value) => {
      return (
        value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.txn_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.date
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.txn_type
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_contact_number
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.customer_contact_number
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_contact_number
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.total_promotion_
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.transaction_value
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_commission_value
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_gst_value
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_due_amount
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.spending_balance_status
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.receipt_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.friendlyapp_invoice
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.friendly_incentive_value
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.friendly_gst_value
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.earning_balance_status
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.payment_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_voucher
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.withdrawal_mode_upidebt
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    filteredData = lodash.orderBy(
      filteredData,
      this.state.columnToSort,
      this.state.sortDirection
    );
    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        filteredData.length - this.state.page * this.state.rowsPerPage
      );
    return (
      <div>
        <CSVLink
          data={filteredData}
          headers={headers}
          filename={"user_data.csv"}
          style={{ textDecoration: "none", marginBottom: "100" }}
        >
          <CButton
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            color="primary"
          >
            Download CSV
          </CButton>
        </CSVLink>

        <Link to="/transactions/add">
          <CButton style={{ float: "right" }} color="danger">
            Add Transaction
          </CButton>
        </Link>

        <CInput
          id="searchInput"
          type="search"
          onChange={this.handleChange}
          placeholder="Search"
          autoComplete="off"
        />
        <br />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((row) => (
                  <TableCell key={row.key} align="center">
                    <div onClick={() => this.handleSort(row.key)}>
                      {row.label}
                    </div>
                  </TableCell>
                ))}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(this.state.rowsPerPage > 0
                ? filteredData.slice(
                    this.state.page * this.state.rowsPerPage,
                    this.state.page * this.state.rowsPerPage +
                      this.state.rowsPerPage
                  )
                : filteredData
              ).map((row) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.txn_id}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.txn_type}</TableCell>
                    <TableCell align="center">
                      {row.brand_friend_name}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_contact_number}
                    </TableCell>
                    <TableCell align="center">
                      {row.customer_contact_number}
                    </TableCell>
                    <TableCell align="center">
                      {row.business_contact_number}
                    </TableCell>
                    <TableCell align="center">{row.business_name}</TableCell>
                    <TableCell align="center">{row.total_promotion_}</TableCell>
                    <TableCell align="center">
                      {row.transaction_value}
                    </TableCell>
                    <TableCell align="center">
                      {row.business_commission_value}
                    </TableCell>
                    <TableCell align="center">
                      {row.business_gst_value}
                    </TableCell>
                    <TableCell align="center">
                      {row.business_due_amount}
                    </TableCell>
                    <TableCell align="center">
                      {row.spending_balance_status}
                    </TableCell>
                    <TableCell align="center">{row.receipt_id}</TableCell>
                    <TableCell align="center">
                      {row.friendlyapp_invoice}
                    </TableCell>
                    <TableCell align="center">
                      {row.friendly_incentive_value}
                    </TableCell>
                    <TableCell align="center">
                      {row.friendly_gst_value}
                    </TableCell>
                    <TableCell align="center">
                      {row.earning_balance_status}
                    </TableCell>
                    <TableCell align="center">{row.payment_id}</TableCell>
                    <TableCell align="center">
                      {row.brand_friend_voucher}
                    </TableCell>
                    <TableCell align="center">
                      {row.withdrawal_mode_upidebt}
                    </TableCell>
                    <TableCell align="center">
                      <div>
                        <CIcon
                          onClick={() => this.handleEdit(row.id)}
                          className="m-3"
                          size={"sm"}
                          name="cil-pencil"
                        />
                        <CIcon
                          onClick={() => this.handleDelete(row.id)}
                          className="m-3"
                          size={"sm"}
                          name="cil-trash"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={filteredData.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              labelRowsPerPage="Rows"
              style={{ padding: "0px" }}
            />
          </TableRow>
        </TableFooter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.transactions.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getTransactions,
    editTransaction,
    deleteTransaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
