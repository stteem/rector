import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';
import Guest from './Guest';
import Users from './Users';


class Main extends Component {

	render() {
		return(
			<div>
				<Header />
				<Switch>
					<Route path="/guest" component={() =>  <Guest /> } />
					<Route path="/users" component={() =>  <Users /> } />
					<Redirect to="/guest" />
				</Switch>

			</div>

		);
	}
}

export default withRouter(Main);