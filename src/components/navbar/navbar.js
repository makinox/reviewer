import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import './index.css'

import Indes from './../index/index'
import Reports from './../reports/index'

export default (props) => (
  <Router>
    <div>
      <Navbar color="dark" dark expand="md" className="nav">
        <div className="container">
          <Link className="navbar-brand" to="/"> Ventas</Link>
          <NavbarToggler onClick={props.toggler} />
          <Collapse isOpen={props.open} navbar>
                <Nav className="ml-auto" navbar>

                  <Link className="nav-link" to="/">Ventas</Link>
                  <Link className="nav-link" to="/reports">Reportes</Link>

                  {/* Informacion de la empresa */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav className="nav-link">
                      <img src="https://placem.at/things?w=30&h=30" alt="Logo de usuario" className="rounded-circle" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <h5 className="dropdown-header">Tu empresa </h5>
                      </DropdownItem>
                      <DropdownItem>
                        <a className="nav-link text-dark" href="http://54.165.62.112/profile">Ver perfil</a>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Route exact path="/" component={Indes} />
      <Route exact path="/reports" component={Reports} />
    </div>
  </Router>
)
