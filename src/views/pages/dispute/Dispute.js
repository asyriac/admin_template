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
  getDisputes,
  editDispute,
  deleteDispute,
} from "../../../actions/disputes";

class Dispute extends React.Component {
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
    this.props.dispatch(this.props.getDisputes());
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
    this.props.dispatch(this.props.deleteDispute(id));
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
    this.props.dispatch(this.props.editDispute(this.state.editID, editRow));
    this.setState({
      editID: null,
    });
  };
  render() {
    const headers = [
      { label: "Id", key: "id" },
      { label: "Txn ID", key: "txn_id" },
      { label: "Date", key: "date" },
      { label: "Txn Type", key: "txn_type" },
      { label: "Dispute ID", key: "dispute_id" },
      { label: "Business Name", key: "business_name" },
      { label: "Business Contact number", key: "business_contact_number" },
      { label: "Brand Friend Name", key: "brand_friend_name" },
      {
        label: "Brand Friend Contact number",
        key: "brand_friend_contact_number",
      },
      { label: "Dispute Type", key: "dispute_type" },
      { label: "Dispute Details", key: "dispute_details" },
      { label: "Admin Comments", key: "admin_comments" },
      { label: "Admin Validation Status", key: "admin_validation_status" },
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
        value.dispute_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_name
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.business_contact_number
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
        value.dispute_type
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.dispute_details
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.admin_comments
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.admin_validation_status
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
          filename={"dispute_data.csv"}
          style={{ textDecoration: "none", marginBottom: "100" }}
        >
          <CButton
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            color="primary"
          >
            Download CSV
          </CButton>
        </CSVLink>

        <Link to="/disputes/add">
          <CButton style={{ float: "right" }} color="danger">
            Add Dispute
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
                              <CLabel htmlFor="txn_id">Txn ID</CLabel>
                              <CInput
                                id="txn_id"
                                placeholder="Enter txn id"
                                value={this.state.editRow.txn_id}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="date">Date</CLabel>
                              <CInput
                                id="date"
                                placeholder="Enter date"
                                value={this.state.editRow.date}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="txn_type">Txn Type</CLabel>
                              <CInput
                                id="txn_type"
                                placeholder="Enter txn type"
                                value={this.state.editRow.txn_type}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="dispute_id">Dispute ID</CLabel>
                              <CInput
                                id="dispute_id"
                                placeholder="Enter dispute id"
                                value={this.state.editRow.dispute_id}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="business_name">
                                Business Name
                              </CLabel>
                              <CInput
                                id="business_name"
                                placeholder="Enter business name"
                                value={this.state.editRow.business_name}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="business_contact_number">
                                Business Contact number
                              </CLabel>
                              <CInput
                                id="business_contact_number"
                                placeholder="Enter business contact number"
                                value={
                                  this.state.editRow.business_contact_number
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
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
                              <CLabel htmlFor="brand_friend_contact_number">
                                Brand Friend Contact number
                              </CLabel>
                              <CInput
                                id="brand_friend_contact_number"
                                placeholder="Enter brand friend contact number"
                                value={
                                  this.state.editRow.brand_friend_contact_number
                                }
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="dispute_type">
                                Dispute Type
                              </CLabel>
                              <CInput
                                id="dispute_type"
                                placeholder="Enter dispute type"
                                value={this.state.editRow.dispute_type}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="dispute_details">
                                Dispute Details
                              </CLabel>
                              <CInput
                                id="dispute_details"
                                placeholder="Enter dispute details"
                                value={this.state.editRow.dispute_details}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="admin_comments">
                                Admin Comments
                              </CLabel>
                              <CInput
                                id="admin_comments"
                                placeholder="Enter admin comments"
                                value={this.state.editRow.admin_comments}
                                onChange={this.handleEditChange}
                              />
                            </CFormGroup>
                            <CFormGroup>
                              <CLabel htmlFor="admin_validation_status">
                                Admin Validation Status
                              </CLabel>
                              <CInput
                                id="admin_validation_status"
                                placeholder="Enter admin validation status"
                                value={
                                  this.state.editRow.admin_validation_status
                                }
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
                      <TableCell align="center">{row.txn_id}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.txn_type}</TableCell>
                      <TableCell align="center">{row.dispute_id}</TableCell>
                      <TableCell align="center">{row.business_name}</TableCell>
                      <TableCell align="center">
                        {row.business_contact_number}
                      </TableCell>
                      <TableCell align="center">
                        {row.brand_friend_name}
                      </TableCell>
                      <TableCell align="center">
                        {row.brand_friend_contact_number}
                      </TableCell>
                      <TableCell align="center">{row.dispute_type}</TableCell>
                      <TableCell align="center">
                        {row.dispute_details}
                      </TableCell>
                      <TableCell align="center">{row.admin_comments}</TableCell>
                      <TableCell align="center">
                        {row.admin_validation_status}
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
    data: state.disputes.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getDisputes,
    editDispute,
    deleteDispute,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dispute);
