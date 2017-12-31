import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

var navStyle = {
  backgroundColor:"#fff",
  borderBottom:"0px",
};

const navbarInstance = (
  <Navbar style={navStyle}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">About Me</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Experiments</NavItem>
      <NavItem eventKey={2} href="#">Music</NavItem>
      <NavItem eventKey={3} href="#">Tech</NavItem>
      <NavItem eventKey={3} href="#">Photos</NavItem>
      <NavItem eventKey={3} href="#">Contact</NavItem>
    </Nav>
  </Navbar>
);
ReactDOM.render(navbarInstance, document.getElementById('basic-nav'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hola folks</h1>
        </header>
        <p className="Paragraph">
          This is test paragraph under classname.
        </p>
      </div>
    );
  }
}

export default App;
