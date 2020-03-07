import React from 'react';



export default function Guest (props) {

	const [name, setName] = React.useState('');
	const [guest, setGuest] = React.useState('');

	const handleClick = () => {
		setGuest(name);
	}
	// body...
	return(
		<div>
		{ guest !== '' ? <p>My new guest is {guest}</p> : null }
		<input
		  type="text"
          placeholder="Enter guest name"
          onChange={(e) => setName(e.target.value)}
        />
        <button color="primary" onClick={() => handleClick()} >Send Guest</button>
		</div>
	);
}