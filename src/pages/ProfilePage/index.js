import React from 'react'
import { Link } from 'react-router-dom'
import * as Storage from '../../utils/storage'

export default class ProfilePage extends React.Component {

  state = {
    storedTranslations: Storage.loadTranslations()
  }

  clearTranslations = () => {
    Storage.clearTranslations()
    this.setState({ storedTranslations: [] })
  }

  render() {
    const translations = this.state.storedTranslations.map((term, index) => (
      <li key={index}>
        <Link to={{ pathname: '/translate', term }}>{term}</Link>
      </li>
    ))

    return (
      <React.Fragment>
        <h2>Profile page</h2>

        <p>Logged in as: {Storage.getUser()}</p>

        <div>
          {this.state.storedTranslations.length > 0
            ? 
              <div>
                <button className="btn btn-outline-secondary" onClick={this.clearTranslations}>Clear history</button>
                <br />
                Your latest translations
              </div>
            : 'No translations found'}
        </div>

        <ul>
          {translations}
        </ul>
      </React.Fragment>
    )
  }
}
