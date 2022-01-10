import { Container } from 'react-bootstrap'

export default function Intro() {
  return (
    <Container fluid id="section-1" className="px-4 py-5 text-center">
      <div className="col-xs-6">
        <h1>Taiwei from Taiwan</h1>
        <div className="profile-pic"></div>
        {/* <img src="~/src/assets/profile-pic.jpeg" alt="test" /> */}
        <p>A web developer and probably a video game addic</p>
      </div>
    </Container>
  )
}
