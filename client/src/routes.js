import React from 'react'
import { Switch, Route} from 'react-router-dom';
import SelectedNotebook from './Components/SelectedNotebook';
import Notebook from './Components/Notebook';
import Layout from './Components/Layout';
import Homescreen from './Components/Homescreen';
import Searchbar from './Components/Searchbar';
import Sidebar from './Components/Sidebar';

export default function Routes() {
    return(
        <Switch>
        <Route exact path="/" component={Homescreen} />
        <Route exact path="/Noter" component={Layout}/>
        <Route exact path="/Noter/notebook/:id" component={SelectedNotebook} />
      </Switch> 
    )
}