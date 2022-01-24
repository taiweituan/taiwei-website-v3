import { Container } from 'react-bootstrap'
import { useTypingTextEffect } from '../utils/useTypingTextEffect'

const TEXT_TO_TYPE = ['Lorem ipsum dolor sit']

export default function Intro(): JSX.Element {
  const typingTextEffect = useTypingTextEffect(TEXT_TO_TYPE)
  return (
    <Container fluid id="section-1" className="px-4 py-5 text-center">
      <div className="col-xs-6">
        <h1>Taiwei from Taiwan</h1>
        <div className="profile-pic"></div>
        {/* <img src="~/src/assets/profile-pic.jpeg" alt="test" /> */}
        <p>A web developer and probably a video game addic</p>
        <div className="blinking-cursor">{typingTextEffect}</div>
      </div>
    </Container>
  )
}
