import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
            className="home-image"
          />
        </div>
      </>
    )
  }
}

export default Home
