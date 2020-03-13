import React, {Component} from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Main from './components/Main';





class App extends Component {
    

  render() {
        return (
          <HashRouter>
            <div className="">
                <Main />
            </div>
          </HashRouter>
        );
    }

}

export default App;