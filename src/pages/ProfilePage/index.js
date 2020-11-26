import React from 'react'
import './profileStyle.css'
import { Link } from 'react-router-dom'
import { isLoggedIn } from '../../utils/auth'

const mockData = ['hej på dig', 'dodge this', 'duckduckgo > google', 'my name is dave']

export default class ProfilePage extends React.Component {
 
  state = {
    storedTranslations: mockData
  }
  
  clearTranslations = () => {
    this.setState({ storedTranslations: [] })
  }

  render() {
    const translations = this.state.storedTranslations.map((term, index) => (
      <Link to={{pathname: '/translate', term }} key={index}>{ term }</Link>
    ))
    
    return (
      <React.Fragment>
        <h2>Profile page</h2>

        <button className="btn btn-outline-secondary" onClick={this.clearTranslations}>Clear history</button>

        <p>Your latest searches</p>
          
        <div>
          {translations}
        </div>
      </React.Fragment>
    )
  }
}
