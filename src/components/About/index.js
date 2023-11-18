import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <div className="fade">
          <p>
          I am currently a penultimate computing student in the National University of Singapore. As an Engineering Student previously, I have discovered my passion in coding, thus I made a switch to a programming related course.
          </p>
          <p align="LEFT">
          I am an outgoing and all-rounded individual seeking an internship that will allow me to gain hands-on experience in the working industry. Having the experience of taking on leadership roles, I believe that I have the ability and experience to relate to a diverse group of people and able to work extremely well under pressure.
          </p>
          <p>
          Do feel free to contact me for any learning opportunities!
          </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              
            </div>
            <div className="face2">
              
            </div>
            <div className="face3">
              
            </div>
            <div className="face4">
              
            </div>
            <div className="face5">
              
            </div>
            <div className="face6">
              
            </div>
          </div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default About