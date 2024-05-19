import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import Profile from '../../assets/images/Profile.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const AArray = ['A', 'n', 'g', ' ', 'Y', 'o', 'n', 'g']
  const BArray = ['P', 'E', 'N', 'U', 'L', 'T', 'I', 'M', 'A', 'T', 'E']
  const CArray = ['Y', 'E', 'A', 'R']
  const DArray = ['C', 'O', 'M', 'P', 'U', 'T', 'I', 'N', 'G']
  const EArray = ['U', 'N', 'D', 'E', 'R', 'G', 'R', 'A', 'D', 'U', 'A', 'T', 'E']
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone" style={{ marginTop: "-110px", marginLeft: "-30px" }}>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>
            <span className={`${letterClass} _16`}> </span>
            <AnimatedLetters letterClass={letterClass}
              strArray={AArray}
              idx={17} />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={BArray}
              idx={23} />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={CArray}
              idx={23} />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={DArray}
              idx={23} />
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={EArray}
              idx={23} />
            <br />

            <br />
          </h1><h2 style={{ margin: "20px", paddingLeft: '60px' }}>Aspiring Impactor</h2>
          <br />

        </div>
        <div className="home-stage-cube-cont">
          <div className="home-cubespinner">

            <div className="face2">
              <img src={Profile} alt="profile" />
            </div>

          </div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Home