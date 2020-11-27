import React from 'react'
import { loadCheckStatus, storeChecked, storeTranslation } from '../../utils/storage'
import Sign from './Sign'
import './translate.css'

export default class TranslatePage extends React.Component {

  searchBar = React.createRef()
  refreshOnce = false

  state = {
    translationText: '',
    translation: [],
    isChecked: loadCheckStatus()
  }

  componentDidMount() {
    // if term was sent through link (from profile page) 
    const term = this.props.location.term
    if (term) {
      this.translate(term)
    }
  }

  handleInputChange = e => {
    const target = e.target;
    const isChecked = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      isChecked: isChecked
    });
    storeChecked(isChecked);
  }

  handleSubmit = e => {
    e.preventDefault()
    const text = this.searchBar.current.value
    this.translate(text)
    storeTranslation(text)
  }

  translate = text => {
    const translation = []

    for (let i = 0; i < text.length; i++) {
      translation.push(
        <Sign key={i} char={text[i]} checked={this.state.isChecked} />
      )
    }
    this.searchBar.current.value = ''
    this.setState({ translationText: text, translation });
  }

  render = () => (
    <React.Fragment>
      <h2>Translate to sign language</h2>

      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input className="form-control" type="search" placeholder="Enter a term to translate" ref={this.searchBar} autoFocus />
          </div>
          <div className="col">
            <button className="btn btn-outline-secondary">Translate</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="checkbox" checked={this.state.isChecked} onChange={this.handleInputChange} />
            <label> Hide non-letter characters?</label>
          </div>
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
