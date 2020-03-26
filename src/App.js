import React from 'react';
import './App.css';
import './component/contact/Contact'
import Contacts from './component/contact/Contacts';
import Header from './component/layout/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './context'; 
import AddContact from './component/contact/AddContact'

function App() {
  return (
    <Provider>
      <div className="App">
      <Header FormName='Contact Form' />
      <div className="container">
        <AddContact />
        <Contacts />
      </div>
    </div>
    </Provider>
  );
}

export default App;