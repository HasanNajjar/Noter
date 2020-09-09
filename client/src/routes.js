import React from 'react'
import { Switch, Route} from 'react-router-dom';
import SelectedNotebook from './Components/SelectedNotebook';
import Notebook from './Components/Notebook';

export default function Routes() {
    return(
        <Switch>
        <Route exact path="/" component={Notebook}/>
        <Route exact path="/notebook/:id" component={SelectedNotebook} />
      </Switch> 
    )
}