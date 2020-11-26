import React from 'react'
import { storeTranslation } from '../../utils/storage'
import Sign from './Sign'
import './translate.css'

export default class TranslatePage extends React.Component {

  searchBar = React.createRef()
  refreshOnce = false

  state = {
    translationText: '',
    translation: []
  }

  componentDidMount() {
    // if term was sent through link (from profile page) 
    const term = this.props.location.term
    if(term) {
      this.translate(term)
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.translate(this.searchBar.current.value)
  }

  translate = text => {
    const translation = []

    for (let i = 0; i < text.length; i++) {
      translation.push(
        <Sign key={i} char={text[i]} />
      )
    }
    this.searchBar.current.value = ''
    this.setState({ translationText: text, translation });
  }

  render = () => (
    <React.Fragment>
      <h2>Translate to sign language</h2>

      <form onSubmit={this.handleSubmit} className="row">
        <div className="col-8">
          <input className="form-control" type="search" placeholder="Enter a term to translate" ref={this.searchBar} autoFocus />
        </div>
        <div className="col">
          <button className="btn btn-outline-secondary">Translate</button>
        </div>
      </form>

      {this.state.translation.length > 0 &&
        <div className="mt-5">
          <h4>Translated</h4>
          
          {this.state.translationText}
          <div className="border rounded p-2 translationBox">
            {this.state.translation}
          </div>
        </div>}
    </React.Fragment>
  )
}
