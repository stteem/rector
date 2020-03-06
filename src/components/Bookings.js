import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';

var datePattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

const checkDatePattern = (arr) => {
  return datePattern.test(arr);
}


const compareDates = (startDate, endDate) => {

  if (startDate > endDate || startDate >= endDate || endDate <= startDate) {
    return null;
  }
    return true;
}



class Bookings extends Component {
    constructor(props) {
        super(props);
        this.handleDateInfo = this.handleDateInfo.bind(this);
        this.handleGuestInfo = this.handleGuestInfo.bind(this);
        this.state ={
            initialGuest: '',
            initialDate: ''
        }
    }
    
    handleGuestInfo(e){
        this.setState({initialGuest: e.target.value});
    }
    
    handleDateInfo(e){
      this.setState({initialDate: e.target.value});
    }

    guestState(){
      var guestInputs = this.state.initialGuest;
      if (guestInputs !== '') {
        var splits = guestInputs.split('\n');
        return splits;
      }
      return false;
    }

    


    checkDateState(){

      var dateInputs = this.state.initialDate;

      var validDate = [];

      if (dateInputs !== '') {

        var splitByNewLine = dateInputs.split('\n');

        for(var i of splitByNewLine){

          var splitByTo = i.split('to');

          if (splitByTo.every(checkDatePattern)) {

            var startDate = new Date(splitByTo[0]);
            var endDate = new Date(splitByTo[1]);

            if (compareDates(startDate, endDate)) {

              var rejoinWithTo = splitByTo.join("to");
                rejoinWithTo.includes("to") ? validDate.push(rejoinWithTo) : validDate.push(null);
              
            }
            else {
              validDate.push(null);
            }
          }
          else {
            console.log("Bad date pattern");
            validDate.push(null);
          }
        }
        
        return validDate;
      }
      
        validDate.push(null);
        return validDate;
    }


    
    async handleClick() {

      var guestArray = [];


      var splitdates = await this.checkDateState();


      var splitguests = await this.guestState();


      
      var count = 0;
      
      while(count < splitguests.length){
        guestArray.push({
          "name": splitguests[count],
          "date": splitdates[count]
        });
        count++;
      };

      return this.props.setGuest(guestArray);
  
    }

    render() {
        return (
      <div className="row">
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the hacker list (one hacker per line)"
          onChange={(e) => this.handleGuestInfo(e)}
        />
        <TextField
          className="col-md-6"
          multiline
          rows="4"
          placeholder="Enter the date range for each hacker's stay (one range per line)"
          onChange={(e) => this.handleDateInfo(e)}
        />
        <button variant="outlined" color="primary" className="block-center" onClick={() => this.handleClick()} >Get Meals Schedule</button>
        </div>);
    }
}


export default Bookings;