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
import { getUsers, editUser, deleteUser } from "../../../actions/users";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      editID: null,
      page: 0,
      rowsPerPage: 5,
      columnToSort: "",
      sortDirection: "asc",
      editRow: {},
    };
  }

  async componentDidMount() {
    this.props.dispatch(this.props.getUsers());
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleEditChange = (e) => {
    console.log(e.target.id);
    console.log(this.state.editRow);
    this.setState({
      editRow: {
        ...this.state.editRow,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleEdit = (id) => {
    console.log(id);
    this.props.history.push(`/users/edit/${id}`);
  };

  handleDelete = (id) => {
    this.props.dispatch(this.props.deleteUser(id));
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

  handleCancelEdit = () => {
    this.setState({
      editID: null,
    });
  };

  handleSaveEdit = () => {
    const { editRow } = this.state;
    this.props.dispatch(this.props.editUser(this.state.editID, editRow));
    this.setState({
      editID: null,
    });
  };
  render() {
    const headers = [
      { label: "Id", key: "id" },
      { label: "User ID", key: "user_id" },
      {
        label: "Brand Friend Registered Date",
        key: "brand_friend_registered_date",
      },
      { label: "Brand Friend Name", key: "brand_friend_name" },
      {
        label: "Brand Friend Contact number",
        key: "brand_friend_contact_number",
      },
      { label: "Brand Friend Email ID", key: "brand_friend_email_id" },
      {
        label: "Brand Friend My Invite Number",
        key: "brand_friend_my_invite_number",
      },
      {
        label: "Brand Friend Referrer Contact#",
        key: "brand_friend_referrer_contact",
      },
      {
        label: "Brand Friend Billing Address",
        key: "brand_friend_billing_address",
      },
      { label: "City", key: "city" },
      { label: "Brand Friend PINCODE", key: "brand_friend_pincode" },
      { label: "Enrolled Business (Yes/No)", key: "enrolled_business_yesno" },
      { label: "Business Referrer Contact#", key: "business_referrer_contact" },
      { label: "Business GST#", key: "business_gst" },
      { label: "Business Name", key: "business_name" },
      { label: "Country", key: "country" },
      { label: "Business Billing Address", key: "business_billing_address" },
      { label: "Area", key: "area" },
      { label: "City", key: "city_2" },
      { label: "Business PINCODE", key: "business_pincode" },
      { label: "Category", key: "category" },
      { label: "Keywords", key: "keywords" },
      { label: "Website", key: "website" },
      { label: "Venue Map", key: "venue_map" },
      { label: "Estd On", key: "estd_on" },
    ];
    const { data } = this.props;
    const { searchInput } = this.state;
    let filteredData = data.filter((value) => {
      return (
        value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.user_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_registered_date
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
        value.brand_friend_email_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_my_invite_number
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_referrer_contact
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_billing_address
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.city
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_pincode
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.enrolled_business_yesno
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_referrer_contact
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_gst
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.country
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_billing_address
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.area
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.city_2
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_pincode
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.category
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.keywords
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.website
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.venue_map
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.estd_on
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

        <Link to="/users/add">
          <CButton style={{ float: "right" }} color="danger">
            Add User
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
                const currentlyEditing = this.state.editID === row.id;
                console.log(currentlyEditing);
                return (
                  <TableRow key={row.id}>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.user_id}</TableCell>
                    <TableCell align="center">
                      {row.brand_friend_registered_date}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_name}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_contact_number}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_email_id}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_my_invite_number}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_referrer_contact}
                    </TableCell>
                    <TableCell align="center">
                      {row.brand_friend_billing_address}
                    </TableCell>
                    <TableCell align="center">{row.city}</TableCell>
                    <TableCell align="center">
                      {row.brand_friend_pincode}
                    </TableCell>
                    <TableCell align="center">
                      {row.enrolled_business_yesno}
                    </TableCell>
                    <TableCell align="center">
                      {row.business_referrer_contact}
                    </TableCell>
                    <TableCell align="center">{row.business_gst}</TableCell>
                    <TableCell align="center">{row.business_name}</TableCell>
                    <TableCell align="center">{row.country}</TableCell>
                    <TableCell align="center">
                      {row.business_billing_address}
                    </TableCell>
                    <TableCell align="center">{row.area}</TableCell>
                    <TableCell align="center">{row.city_2}</TableCell>
                    <TableCell align="center">{row.business_pincode}</TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                    <TableCell align="center">{row.keywords}</TableCell>
                    <TableCell align="center">{row.website}</TableCell>
                    <TableCell align="center">{row.venue_map}</TableCell>
                    <TableCell align="center">{row.estd_on}</TableCell>
                    <TableCell align="center">
                      <div>
                        <CIcon
                          onClick={() => this.handleEdit(row.id)}
                          className="m-3"
                          size={"s"}
                          name="cil-pencil"
                        />
                        <CIcon
                          onClick={() => this.handleDelete(row.id)}
                          className="m-3"
                          size={"s"}
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
    data: state.users.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getUsers,
    editUser,
    deleteUser,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
