import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Alert, Breadcrumb, Card, Dropdown, DropdownButton } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap NavBar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link1">Sobre</Nav.Link>
          <Nav.Link href="#link2">Atividades</Nav.Link>
          <Nav.Link href="#link3">Contato</Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#acao/a">Ação A</NavDropdown.Item>
            <NavDropdown.Item href="#acao/b">Ação B</NavDropdown.Item>
            <NavDropdown.Item href="#acao/c">Ação C</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#acao/d">Link Separado</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    <br />

      <Card style={{ color: 'black', width: '23rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/150?grayscale" />
        <Card.Body>
          <Card.Title>TÍTULO DO CARD</Card.Title>
          <Card.Text>
            Aqui é possível adicionar qualquer texto para servir como o conteúdo do card.
            Alguma informação, dado ou descrição importante.
          </Card.Text>
        </Card.Body>
      </Card>
    <br />

      <DropdownButton id="dropdown-basic-button" title="Botão Dropdown">
        <Dropdown.Item href="#/action-1">Ação 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Ação 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Outra coisa</Dropdown.Item>
      </DropdownButton>
     <br />

      <Breadcrumb>
        <Breadcrumb.Item>Página 1</Breadcrumb.Item>
        <Breadcrumb.Item>Página 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Página 3</Breadcrumb.Item>
      </Breadcrumb>

      <Alert variant='warning'>Alguma mensagem importante de alerta exibida estilizada!</Alert>
      <Button variant="outline-primary">Botão Exemplo 1</Button><br />
      <Button>Botão Exemplo 2</Button>

      </header>
    </div>
  );
}

export default App;
