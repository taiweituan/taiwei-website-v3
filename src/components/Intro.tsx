import { Container } from 'react-bootstrap'
import { useTypingTextEffect } from '../utils/useTypingTextEffect'
import profilePic from '../assets/profile-pic.jpeg'
import profilePicMe from '../assets/profile-pic_me.jpeg'
import profilePicMeMe from '../assets/profile-pic_meme.jpeg'
import { useEffect, useState } from 'react'

const TEXT_TO_TYPE = [
  'A Front-End Developer 💻',
  'Causal Photographer 📷',
  'Snowboarding Enthusiastic 🏂',
  'Video Game Addic 🤓',
]

function randomChanceGenerator(): number {
  return Math.random() * 100
}

export default function Intro(): JSX.Element {
  const typingTextEffect = useTypingTextEffect(TEXT_TO_TYPE)
  const [profilePicture, setProfilePic] = useState(profilePicMe)

  useEffect(() => {
    const randomNumber = randomChanceGenerator()

    // 10% randomly see different pic
    if (randomNumber < 3) {
      // rarest 3% (Sago!!)
      setProfilePic(profilePic)
    } else if (randomNumber < 10 && randomNumber >= 3) {
      // 7% (still me!!)
      setProfilePic(profilePicMeMe)
    }
  }, [])

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
