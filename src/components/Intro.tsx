import { Container } from 'react-bootstrap'
import { useTypingTextEffect } from '../hooks/useTypingTextEffect'
import useProfilePic from '../hooks/useProfilePic'

const TEXT_TO_TYPE = [
  'A Front-End Developer 💻',
  'Causal Photographer 📷',
  'Snowboarding Enthusiastic 🏂',
  'Video Game Addic 🤓',
]

export default function Intro(): JSX.Element {
  const typingTextEffect = useTypingTextEffect(TEXT_TO_TYPE)
  const profilePicture = useProfilePic()

  return (
    <Container fluid id="section-1" className="px-4 py-5 text-center">
      <div className="col-xs-6">
        <h1>Hello, This is Taiwei!</h1>
        <div className="profile-pic">
          <img src={profilePicture} />
        </div>
        <div className="blinking-cursor">{typingTextEffect}</div>
      </div>
    </Container>
  )
}
