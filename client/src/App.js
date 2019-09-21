import React from 'react';
import ApolloClient from 'apollo-boost/';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

const client = new ApolloClient({
	uri: 'https://localhost:5000/graphql'
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<h1>SpaceX</h1>
			</div>
		</ApolloProvider>
	);
};

export default App;
