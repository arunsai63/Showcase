import React, { Component } from 'react';
import NavBar from './Components/Core/NavBar';
import DS from './Components/DS/DS';

interface IProps {

}

interface IState {

}

class App extends Component<IProps, IState> {
	render() {
		return (
			<>
				<NavBar/>
				<DS/>
			</>
		)
	}
}

export default App;