import React from 'react';


export default function Guest (props) {

	const [name, setName] = React.useState('');
	const [guest, setGuest] = React.useState('');

	const handleClick = () => {
		setGuest(name);
	}
	// body...
	return(
		<>
		<center>
            <h2>Guests And Users</h2>
        </center>
		<div className="container">
			
				<div className="text" >
					{ guest !== '' ? <p>My new guest is {guest}</p> : null }
				</div>
				<form>
					<input
					  type="text"
			          placeholder="Enter guest name"
			          onChange={(e) => setName(e.target.value)}
			        />
			        <button color="primary" onClick={() => handleClick()} >Send Guest</button>
		        </form>
		</div>
		</>
	);
}