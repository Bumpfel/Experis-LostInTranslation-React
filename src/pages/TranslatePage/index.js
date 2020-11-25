import React, { useState } from 'react'
import { clearTranslations, loadTranslations, storeTranslation } from '../../utils/storage';

const TranslatePage = (props) => {

  const [translation, setTranslation] = useState([]);

  const onUserSubmit = () => {

    setTranslation(translation.concat(translation))
    storeTranslation(translation);
    
  }

  const getTranslation = () => {
    console.log(loadTranslations());
  }

  let onTranslationChanged = ev => setTranslation(ev.target.value.trim());

  return (
    <div>
      <form onSubmit={onUserSubmit}>
        <div className="form-group">
          <label>Translate: </label>
          <input className="form-control" type="text" autoComplete="off" placeholder="Enter word to translate" onChange={onTranslationChanged} />
        </div>
        <div>
          <button className="btn btn-outline-secondary">Translate</button>
        </div>

      </form>
        <div>
          <button className="btn btn-outline-secondary" onClick={getTranslation}>Get translation</button>
        </div>
        <div>
          <button className="btn btn-outline-secondary"onClick={clearTranslations}>Remove translation</button>
        </div>
    </div>
  )

}

export default TranslatePage;