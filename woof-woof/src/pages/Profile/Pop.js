import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Pop() {
  return (
    <div>
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
    </div>
  )
}

export default Pop



