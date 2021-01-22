import React, { Component } from 'react';
import './App.css';
import Annual from './components/Annual/Annual';
import Monthly from './components/Monthly/Monthly';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state= {
      route: 'annually'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }
// function App() {
  render() {
    return (
      <div className="App">
        {this.state.route === 'annually' 
        ? <Annual onRouteChange={this.onRouteChange}/> 
        :<Monthly onRouteChange={this.onRouteChange}/>}
      </div>
    );
  }
}

export default App;
