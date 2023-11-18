import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import angyong from '../../assets/images/angyong.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faUser, faKeyboard, faFolder, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={angyong} alt="logo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faIdCard} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faKeyboard} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreference" href="https://www.linkedin.com/in/chia-ang-yong/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreference" href="https://github.com/angyonghaseyo">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar