import { Container, Navbar, Nav } from 'react-bootstrap'
import { LINKS } from '../utils/constants'

export default function MyNavbar(): JSX.Element {
  return (
    <Navbar className="my-navbar">
      <Container className="my-navbar__container">
        <Navbar.Brand href="#home">hello world!</Navbar.Brand>
        <Nav>
          {LINKS.map((link, i) => {
            const [href, iconClassName] = link

            return (
              <Nav.Link key={i} href={href} target="_blank">
                <i className={`bi bi-${iconClassName}`}></i>
              </Nav.Link>
            )
          })}
        </Nav>
      </Container>
    </Navbar>
  )
}
