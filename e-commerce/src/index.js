import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// exo fiche contact
let data = {
  contacts: [{
    'name': 'sophie',
    'tel': '0123145679',
    'mail': 'sophie.joffre@cegetel.net'
  },
  {
    'name': 'didou',
    'tel': '9876543210',
    'mail': 'didou.joffre@cegetel.net'
  }]
}

root.render(
  <App {...data} />
)
