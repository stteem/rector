import React from 'react'

const Meals = ({guests}) => {
  if (guests != null) {
    return (
      <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
        {guests.map((guest, index) => {
		    		if (guest.name !== '' && guest.date != null) {
		    			return (
              <ol key={index} id='list'>
                  <div>
                    <li className='morning'>Breakfast for {guest.name} on {guest.date}</li>
                    <li className='afternoon'>Lunch for {guest.name} on {guest.date} </li>
                    <li className='night'>Dinner for {guest.name} on {guest.date} </li>
                  </div>
              </ol>
		    			)
		    		}
		    	})}
      </div>
	    )
  } else {
    return (
      <div />
    )
  }
}

export default Meals;
