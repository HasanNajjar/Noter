import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter,
} from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Searchbar from './Components/Searchbar';
import Routes from './routes';

function App() {

  return (
    <BrowserRouter>

    <Provider store={store}>
    <div className="App">
    <Searchbar />
    <div class="flex flex-row">
    <Sidebar />
    <Routes />
    </div>
 
    </div>
    </Provider>
    </BrowserRouter>

  );
}

export default App;
