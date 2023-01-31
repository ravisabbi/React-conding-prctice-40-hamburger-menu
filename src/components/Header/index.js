import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'
import './index.css'

const Header = () => (
  <div className="nav-bar">
    <div className="nav-bar-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-menu-btn"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              onClick={() => close()}
              className="close-btn"
              data-testid="closeButton"
            >
              <IoMdClose size="30px" />
            </button>
            <ul className="popup-list">
              <li className="popup-list-item">
                <Link to="/" onClick={() => close()} className="nav-link">
                  <AiFillHome size="35" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>

              <li className="popup-list-item">
                <Link to="/about" onClick={() => close()} className="nav-link">
                  <BsInfoCircleFill size="32" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
