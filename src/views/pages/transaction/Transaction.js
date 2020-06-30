import React from "react";

import axios from "axios";
import ReactTable from "react-table-6";

import "react-table-6/react-table.css";
import { CSVLink } from "react-csv";

import { CCard, CInput, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

class Transaction extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchInput: "",
      editID: null,
    };
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    this.setState({
      data: response.data,
    });
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  handleEdit = (id) => {
    this.setState({
      editID: id,
    });
  };

  handleDelete = () => {};
  render() {
    const columns = [
      {
        Header: "User ID",
        accessor: "userId",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
        style: { whiteSpace: "unset" },
      },
      {
        Header: "Message",
        accessor: "body",
        style: { whiteSpace: "unset" },
      },
      {
        Header: "Action",
        Cell: (row) => {
          return (
            <div className="d-flex justify-content-center">
              <CIcon
                onClick={() => this.handleEdit(row.original.id)}
                className="m-3"
                size={"xl"}
                name="cil-pencil"
                style={{ display: "block" }}
              />
              <CIcon
                onClick={() => this.handleDelete(row.original)}
                className="m-3"
                size={"xl"}
                name="cil-trash"
                style={{ display: "block" }}
              />
            </div>
          );
        },
      },
    ];

    const headers = [
      { label: "UserID", key: "userId" },
      { label: "ID", key: "id" },
      { label: "Title", key: "title" },
      { label: "Message", key: "body" },
    ];
    const { searchInput, data } = this.state;
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
          id="name"
          type="search"
          onChange={this.handleChange}
          placeholder="Search"
          autoComplete="off"
        />
        <br />
        <CCard>
          <ReactTable columns={columns} data={filteredData}></ReactTable>
        </CCard>
      </div>
    );
  }
}

export default Transaction;
