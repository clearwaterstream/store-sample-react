import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import MainArea from './features/ProductCatalog/ProductCatalogContainer';

class App extends Component {
  render()
  {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainArea}/>
        </div>
      </Router>
    );
  }
}

export default App;