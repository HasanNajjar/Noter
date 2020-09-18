import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter,
} from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Searchbar from './Components/Searchbar';
import Routes from './routes';
import {loadUser} from './actions/authActions'
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';

function App() {
    useEffect(() => {
      store.dispatch(loadUser())
    }, [])

  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
    <Routes />
    </div>
    </Provider>
    </BrowserRouter>

  );
}

export default App;
