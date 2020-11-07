import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import logo from './assets/images/logo.png';

import LandingPage from './Components/LandingPage/LandingPage';
import CreateSurvey from './Components/CreateSurvey/CreateSurvey';
import Publish from './Components/PublishPage/Publish'
import Survey from './Components/CreateSurvey/Survey';
// import CreatePage from './Components/CreateSurvey/CreatePage';

function App() {
	return (
		<div className="App">
			<img src={logo} alt="logo" />
			<Switch>
				<Route path="/" component={LandingPage} exact/>
				<Route path="/create" component={Survey} />
				{/* <Route path="/create" component={CreatePage} /> */}
				<Route path='/publish' exact component={Publish}/>
			</Switch>
		</div>
	);
}

export default App;