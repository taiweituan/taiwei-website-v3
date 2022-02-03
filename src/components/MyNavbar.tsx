import { Container, Navbar, Nav } from 'react-bootstrap'

export default function MyNavbar(): JSX.Element {
  return (
    <Navbar className="my-navbar">
      <Container className="my-navbar__container">
        <Navbar.Brand href="#home">hello world!</Navbar.Brand>
        <Nav>
          <Nav.Link
            href="https://github.com/taiweituan/personal-website-v3"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/taiweituan/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </Nav.Link>
          <Nav.Link
            href="https://stackoverflow.com/users/4549166"
            target="_blank"
          >
            <i className="bi bi-stack-overflow"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
