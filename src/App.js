import React, {Component} from 'react';
import './App.css';
import Guest from './components/Guest';





class App extends Component {
    

  render() {
        return (
            <div className="container-fluid">
                <center>
                    <h2>Guests</h2>
                </center>
                <div className="container">
                    <Guest />
                </div>
            </div>
        );
    }

}

export default App;