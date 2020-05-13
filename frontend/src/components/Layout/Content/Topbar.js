import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons"
import { Navbar, Button, Nav, NavItem, NavLink } from "reactstrap"

import LoginLink from "./LoginLink"

const Topbar = ({ toggleSidebar }) => (
  <Navbar
    color="light"
    light
    className="navbar shadow-sm p-3 mb-5 bg-white rounded"
    expand="md"
  >
    <Button color="info" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faAlignLeft} />
    </Button>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <LoginLink />
      </NavItem>
    </Nav>
  </Navbar>
)

export default Topbar
