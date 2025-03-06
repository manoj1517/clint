import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import bank from './images/bank.jpg'; // Importing the logo
import { HashRouter, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import Cashback from './cashback';
import Register from './register';
import Alldata from './alldata';
import { useState } from 'react';

function App() {
  let [isModel, setIsModel] = useState(true);

  return (
    <HashRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={bank} // Use the imported image here
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: "30px", height: "30px" }}  // Optional: adjust size
            />
            {" "}Naruto Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => setIsModel(true)}>Home</Nav.Link>
              <Nav.Link href="#register" onClick={() => setIsModel(false)}>Register</Nav.Link>
              <Nav.Link href="#deposit" onClick={() => setIsModel(false)}>Deposit</Nav.Link>
              <Nav.Link href="#cashback" onClick={() => setIsModel(false)}>Cashback</Nav.Link>
              <Nav.Link href="#alldata" onClick={() => setIsModel(false)}>All data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditional rendering for model (you can adjust as per requirement) */}
      {isModel && (
        <div className="custom-carousel" data-bs-theme="dark">
          {/* You can keep the carousel or remove it if not needed */}
        </div>
      )}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/alldata" element={<Alldata />} />
      </Routes>

    </ HashRouter>
  );
}

export default App;
