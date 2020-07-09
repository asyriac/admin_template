import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import logo from "./logo.png";
import { connect } from "react-redux";
import { login_success } from "../../../actions/auth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    this.setState({
      username: "",
      password: "",
    });
    if (username === "admin" && password === "password") {
      this.props.dispatch(login_success());
      this.props.history.push("/dashboard");
    } else console.log("Failed");
  };
  render() {
    const { username, password } = this.state;
    const { isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4" style={{ borderRight: "none" }}>
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="username"
                          type="text"
                          placeholder="Username"
                          autoComplete="off"
                          value={username}
                          onChange={this.handleChange}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="off"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={this.handleSubmit}
                          >
                            Login
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard style={{ borderLeft: "none" }}>
                  <img
                    src={logo}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    alt="logo"
                  />
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Login);
