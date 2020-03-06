import React, {Component} from 'react';
import './App.css';
//import Bookings from './components/Bookings';
//import Meals from './components/Meals';
//import Error from './components/Error';
import Guest from './components/Guest';



/*class App extends Component {
    constructor(props){
        super(props);
        this.setGuest = this.setGuest.bind(this);
        this.state ={
            guests: ''

        }
    }
    
    setGuest(obj){
        this.setState({guests: obj});
    }
    

    render() {
        return (
            <div className="container-fluid">
                <center>
                    <h2>Hacker Hostel</h2>
                </center>
                <div className="container">
                    <Bookings setGuest={this.setGuest} />
                    <Error guests={this.state.guests} />
                    <Meals guests={this.state.guests} />
                </div>
            </div>
        );
    }
}

export default App;*/



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