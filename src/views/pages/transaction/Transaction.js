import React from "react";

import axios from "axios";
import { CSVLink } from "react-csv";

import { CCard, CInput, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TextField from "@material-ui/core/TextField";

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
      editRow: {},
    };
  }

  async componentDidMount() {
    this.props.dispatch(this.props.getTransactions());
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

  handleCancelEdit = () => {
    this.setState({
      editID: null,
    });
  };

  handleSaveEdit = () => {
    const { editRow } = this.state;
    this.props.dispatch(this.props.editTransaction(this.state.editID, editRow));
    this.setState({
      editID: null,
    });
  };
  render() {
    const headers = [
      { label: "UserID", key: "userId" },
      { label: "ID", key: "id" },
      { label: "Title", key: "title" },
      { label: "Message", key: "body" },
    ];
    const { data } = this.props;
    const { searchInput } = this.state;
    let filteredData = data.filter((value) => {
      return (
        value.userId
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
        value.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.body.toLowerCase().includes(searchInput.toLowerCase())
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
      <div className="App">
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

        <Link to="/add-transaction">
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
        <CCard>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((row) => (
                  <TableCell align="center">
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
                    {currentlyEditing ? (
                      <>
                        <TableCell>
                          <TextField
                            id="userId"
                            value={this.state.editRow.userId}
                            onChange={this.handleEditChange}
                            multiline
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="id"
                            value={this.state.editRow.id}
                            onChange={this.handleEditChange}
                            multiline
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="title"
                            value={this.state.editRow.title}
                            onChange={this.handleEditChange}
                            multiline
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="body"
                            value={this.state.editRow.body}
                            onChange={this.handleEditChange}
                            multiline
                            fullWidth
                          />
                        </TableCell>
                        <TableCell>
                          <div>
                            <CIcon
                              onClick={() => this.handleSaveEdit()}
                              className="m-3"
                              size={"xl"}
                              name="cil-save"
                              style={{ display: "block" }}
                            />
                            <CIcon
                              onClick={() => this.handleCancelEdit()}
                              className="m-3"
                              size={"xl"}
                              name="cil-ban"
                              style={{ display: "block" }}
                            />
                          </div>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell align="center">{row.userId}</TableCell>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.body}</TableCell>
                        <TableCell align="center">
                          <div>
                            <CIcon
                              onClick={() => this.handleEdit(row)}
                              className="m-3"
                              size={"xl"}
                              name="cil-pencil"
                              style={{ display: "block" }}
                            />
                            <CIcon
                              onClick={() => this.handleDelete(row.id)}
                              className="m-3"
                              size={"xl"}
                              name="cil-trash"
                              style={{ display: "block" }}
                            />
                          </div>
                        </TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
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
                />
              </TableRow>
            </TableFooter>
          </Table>
        </CCard>
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
