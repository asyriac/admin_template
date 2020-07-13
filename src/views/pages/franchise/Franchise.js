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
  CSwitch,
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
  getFranchises,
  editFranchise,
  deleteFranchise,
} from "../../../actions/franchises";

class Franchise extends React.Component {
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
    this.props.dispatch(this.props.getFranchises());
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
    this.props.history.push(`/franchises/edit/${id}`);
  };

  handleDelete = (id) => {
    this.props.dispatch(this.props.deleteFranchise(id));
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
    this.props.dispatch(this.props.editFranchise(this.state.editID, editRow));
    this.setState({
      editID: null,
    });
  };
  handleIsActive = () => {
    const { is_active } = this.state.editRow;
    this.setState({
      editRow: {
        ...this.state.editRow,
        is_active: !is_active,
      },
    });
  };
  render() {
    const headers = [
      { label: "Id", key: "id" },
      { label: "User Id", key: "user_id" },
      { label: "Business Id", key: "business_id" },
      { label: "Is Active", key: "is_active" },
      { label: "Created By", key: "created_by" },
      { label: "Updated By", key: "updated_by" },
      { label: "Created On", key: "created_on" },
      { label: "Updated On", key: "updated_on" },
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
        value.business_id
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.is_active
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.created_by
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.updated_by
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.created_on
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.updated_on
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
          filename={"franchise_data.csv"}
          style={{ textDecoration: "none", marginBottom: "100" }}
        >
          <CButton
            style={{ textDecoration: "none", marginBottom: "1rem" }}
            color="primary"
          >
            Download CSV
          </CButton>
        </CSVLink>

        <Link to="/franchises/add">
          <CButton style={{ float: "right" }} color="danger">
            Add Franchise
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
                    <TableCell align="center">{row.business_id}</TableCell>
                    <TableCell align="center">
                      {row.is_active ? "True" : "False"}
                    </TableCell>
                    <TableCell align="center">{row.created_by}</TableCell>
                    <TableCell align="center">{row.updated_by}</TableCell>
                    <TableCell align="center">{row.created_on}</TableCell>
                    <TableCell align="center">{row.updated_on}</TableCell>

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
    data: state.franchises.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    getFranchises,
    editFranchise,
    deleteFranchise,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Franchise);
