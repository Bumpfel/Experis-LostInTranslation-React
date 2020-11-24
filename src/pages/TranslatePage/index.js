import React from 'react'
import Sign from './Sign'
import './translate.css'

export default class TranslatePage extends React.Component {

  searchBar = React.createRef()

  state = {
    text: '',
    translation: [],
  }

  componentDidMount = () => {
    // this.mock()
  }

  mock = () => { // debug
    this.searchBar.current.value = 'Hej, hur mår du?!'
    this.translate({ preventDefault: () => {} })
  }

  translate = e => {
    e.preventDefault()
    const text = this.searchBar.current.value
    const translation = []

    for (let i = 0; i < text.length; i++) {
      translation.push(
        <Sign key={i} char={text[i]} />
      )
    }
    this.searchBar.current.value = ''
    this.setState({ text, translation })
  }

  render = () => (
    <React.Fragment>
      <h2>Translate to sign language</h2>

      <form onSubmit={this.translate} className="row">
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
          
          {this.state.text}
          <div className="border rounded p-2 translationBox">
            {this.state.translation}
          </div>
        </div>
      }
    </React.Fragment>
  )
}
