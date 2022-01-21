import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const TEXT_TO_TYPE =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit ut eaque, maxime dicta hic totam ab error nostrum exercitationem consectetur recusandae repellendus voluptas illo amet laboriosam delectus, tempore vero.'

export default function Intro() {
  const [typeText, setTypeText] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('typing stuff')
      setTypeText(TEXT_TO_TYPE.slice(0, typeText.length + 1))
    }, 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [typeText])

  return (
    <Container fluid id="section-1" className="px-4 py-5 text-center">
      <div className="col-xs-6">
        <h1>Taiwei from Taiwan</h1>
        <div className="profile-pic"></div>
        {/* <img src="~/src/assets/profile-pic.jpeg" alt="test" /> */}
        <p>A web developer and probably a video game addic</p>
        <div className="blinking-cursor">{typeText}</div>
      </div>
    </Container>
  )
}
