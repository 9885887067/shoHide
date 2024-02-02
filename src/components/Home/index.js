import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import {Component} from 'react'

class Home extends Component {
  state = {
    isClicked: false,
  }
  changeToText = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }
  render() {
    const {isClicked} = this.state
    if (isClicked === true) {
      return <Logout />
    }
      return <Login />
    
    return (
      <div className="bg-container">
        <div className="container">
          <Message />
          <Login onClick={this.changeToText} />
        </div>
      </div>
    )
  }
}

export default Home
