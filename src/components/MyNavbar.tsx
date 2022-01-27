import { Container, Navbar, Nav } from 'react-bootstrap'

export default function MyNavbar(): JSX.Element {
  return (
    <Navbar className="my-navbar">
      <Container className="my-navbar__container">
        <Navbar.Brand href="#home">hello world!</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">
            <div>
              <i className="bi bi-person-circle"></i>
            </div>
          </Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
