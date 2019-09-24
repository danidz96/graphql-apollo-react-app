import React from 'react';
import ApolloClient from 'apollo-boost/';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches/Launches';
import Launch from './components/Launch/Launch';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="App">
					<h1>SpaceX</h1>
					<Route exact path="/" component={Launches} />
					<Route exact path="/launch/:flight:number" component={Launch} />
				</div>
			</Router>
		</ApolloProvider>
	);
};

export default App;
