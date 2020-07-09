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
  getBrandFriends,
  editBrandFriend,
  deleteBrandFriend,
} from "../../../actions/brandfriends";

class BrandFriend extends React.Component {
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
    this.props.dispatch(this.props.getBrandFriends());
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

  handleEdit = (row) => {
    console.log(row);
    this.setState({
      editID: row.id,
      editRow: row,
    });
  };

  handleDelete = (id) => {
    this.props.dispatch(this.props.deleteBrandFriend(id));
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
    this.props.dispatch(this.props.editBrandFriend(this.state.editID, editRow));
    this.setState({
      editID: null,
    });
  };
  render() {
    const headers = [
      { label: "Id", key: "id" },
      { label: "Brand Friend Name", key: "brand_friend_name" },
      { label: "Brand Friend Number", key: "brand_friend_number" },
      {
        label: "Total Invited & Listed Businesses",
        key: "total_invited_listed_businesses",
      },
      {
        label: "Brand Friend Rating (Avg ratings received by Business)",
        key: "brand_friend_rating_avg_ratings_received_by_business",
      },
      { label: "Total WOM referrals sent", key: "total_wom_referrals_sent" },
      {
        label: "Referral Conversion Rating%",
        key: "referral_conversion_rating",
      },
      {
        label: "Total Business Value Generated",
        key: "total_business_value_generated",
      },
      { label: "Total WOM Earnings", key: "total_wom_earnings" },
    ];
    const { data } = this.props;
    const { searchInput } = this.state;
    let filteredData = data.filter((value) => {
      return (
        value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.brand_friend_name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_number
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.total_invited_listed_businesses
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.brand_friend_rating_avg_ratings_received_by_business
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.total_wom_referrals_sent
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.referral_conversion_rating
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.total_business_value_generated
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.total_wom_earnings
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
          filename={"brand_friend_data.csv"}
          style={{ textDecoration: "none", marginBottom: "100" }}
        >
          <CButton
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            color="primary"
          >
            Download CSV
          </CButton>
        </CSVLink>

        <Link to="/brand-friend/add">
          <CButton style={{ float: "right" }} color="danger">
            Add Brand Friend
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
                  <>
                    {currentlyEditing && (
                      <>
                        <CModal
                          show={this.state.editID}
                          onClose={this.handleCancelEdit}
                          size="xl"
                        >
                          <CModalHeader closeButton>Edit Row</CModalHeader>
                          <CModalBody>
                            <CFormGroup>
                              <CLabel htmlFor="brand_friend_name">
                                Brand Friend Name
                              </CLabel>
                              <CInput
                                id="brand_friend_name"
                                placeholder="Enter brand friend name"
                                value={this.state.editRow.brand_friend_name}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="brand_friend_number">
                                Brand Friend Number
                              </CLabel>
                              <CInput
                                id="brand_friend_number"
                                placeholder="Enter brand friend number"
                                value={this.state.editRow.brand_friend_number}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="total_invited_listed_businesses">
                                Total Invited & Listed Businesses
                              </CLabel>
                              <CInput
                                id="total_invited_listed_businesses"
                                placeholder="Enter total invited & listed businesses"
                                value={
                                  this.state.editRow
                                    .total_invited_listed_businesses
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="brand_friend_rating_avg_ratings_received_by_business">
                                Brand Friend Rating (Avg ratings received by
                                Business)
                              </CLabel>
                              <CInput
                                id="brand_friend_rating_avg_ratings_received_by_business"
                                placeholder="Enter brand friend rating (avg ratings received by business)"
                                value={
                                  this.state.editRow
                                    .brand_friend_rating_avg_ratings_received_by_business
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="total_wom_referrals_sent">
                                Total WOM referrals sent
                              </CLabel>
                              <CInput
                                id="total_wom_referrals_sent"
                                placeholder="Enter total wom referrals sent"
                                value={
                                  this.state.editRow.total_wom_referrals_sent
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="referral_conversion_rating">
                                Referral Conversion Rating%
                              </CLabel>
                              <CInput
                                id="referral_conversion_rating"
                                placeholder="Enter referral conversion rating%"
                                value={
                                  this.state.editRow.referral_conversion_rating
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="total_business_value_generated">
                                Total Business Value Generated
                              </CLabel>
                              <CInput
                                id="total_business_value_generated"
                                placeholder="Enter total business value generated"
                                value={
                                  this.state.editRow
                                    .total_business_value_generated
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="total_wom_earnings">
                                Total WOM Earnings
                              </CLabel>
                              <CInput
                                id="total_wom_earnings"
                                placeholder="Enter total wom earnings"
                                value={this.state.editRow.total_wom_earnings}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                          </CModalBody>
                          <CModalFooter>
                            <CButton
                              color="primary"
                              onClick={this.handleSaveEdit}
                            >
                              Save
                            </CButton>{" "}
                            <CButton
                              color="secondary"
                              onClick={this.handleEdit}
                            >
                              Cancel
                            </CButton>
                          </CModalFooter>
                        </CModal>
                      </>
                    )}
                    <TableRow key={row.id}>
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">
                        {row.brand_friend_name}
                      </TableCell>
                      <TableCell align="center">
                        {row.brand_friend_number}
                      </TableCell>
                      <TableCell align="center">
                        {row.total_invited_listed_businesses}
                      </TableCell>
                      <TableCell align="center">
                        {
                          row.brand_friend_rating_avg_ratings_received_by_business
                        }
                      </TableCell>
                      <TableCell align="center">
                        {row.total_wom_referrals_sent}
                      </TableCell>
                      <TableCell align="center">
                        {row.referral_conversion_rating}
                      </TableCell>
                      <TableCell align="center">
                        {row.total_business_value_generated}
                      </TableCell>
                      <TableCell align="center">
                        {row.total_wom_earnings}
                      </TableCell>

                      <TableCell align="center">
                        <div>
                          <CIcon
                            onClick={() => this.handleEdit(row)}
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
                  </>
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
    data: state.brandfriends.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getBrandFriends,
    editBrandFriend,
    deleteBrandFriend,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandFriend);
