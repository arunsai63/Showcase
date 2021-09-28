import React, { Component } from 'react';
import NavBar from './Components/Core/NavBar';
import DS from './Components/DS/DS';
import {
	BrowserRouter as Bro,
	Switch,
	Route
} from 'react-router-dom'
import Algo from './Components/Algo/Algo';
import About from './Components/About';
import Games from './Components/Games/Games';

class App extends Component {
	render() {
		return (
			<>
				<Bro>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<About />
						</Route>
						<Route exact path="/About">
							<About />
						</Route>
						<Route path="/DS">
							<DS />
						</Route>
						<Route path="/Algos">
							<Algo />
						</Route>
						<Route path="/Games">
							<Games />
						</Route>
					</Switch>
				</Bro>
			</>
		)
	}
}

export default App;