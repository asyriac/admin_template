import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

class TheHeaderDropdown extends React.Component {
  handleLogout = () => {
    console.log("Clicked");
    this.props.dispatch(logout());
  };
  render() {
    return (
      <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CImg
              src={"avatars/6.jpg"}
              className="c-avatar-img"
              alt="admin@bootstrapmaster.com"
            />
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem header tag="div" color="light" className="text-center">
            <strong>Settings</strong>
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-user" className="mfe-2" />
            Profile
          </CDropdownItem>
          <CDropdownItem>
            <CIcon name="cil-settings" className="mfe-2" />
            Settings
          </CDropdownItem>
          <CDropdownItem divider />
          <CDropdownItem onClick={this.handleLogout}>
            <i className="cil-account-logout mfe-2"></i>
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }
}

export default connect()(TheHeaderDropdown);
