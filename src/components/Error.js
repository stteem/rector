import React from 'react'

/*const Error = (props) => {
  if (props.guests != null) {
	    return (
  			<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 error'>
	        	{props.guests.map((guest, index) => {
	    			if (guest.date === null && guest.name !== '') {
		    			return (
	  						<div key={index} id='list'>
	                			<div className='error-msg'>
		      						<i className='fa fa-times-circle' />
							      	<p>Error! No menu generated for {guest.name}</p>
							    </div>
	              			</div>
	            		);
		    		}
		    	})}
      		</div>
	    );
  } else {
    	return (<div></div>);
  }
}*/


function RenderError({guests}) {
    if (guests !== null) {
        return(
            <div className="col-12 col-md-12 m-1 " >
                <ul className="list-unstyled">
                    {
                    	guests.map((guest, index) => {
                            return guest.date === null && guest.name !== '' ? 
		  						<div key={index} id='list'>
		                			<div className='error-msg'>
			      						<i className='fa fa-times-circle' />
								      	<p>Error! No menu generated for {guest.name}</p>
								    </div>
		              			</div>
	              			: null	
                        })
                    }
                </ul>
            </div>
        );
    }
    else
        return(
            <div>
            </div>
        );
}


function Error(props) {

	return(
		<div>
			<RenderError guests={props.guests} />
		</div>
	);
}

export default Error;
