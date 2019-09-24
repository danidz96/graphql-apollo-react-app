import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

const GET_LAUNCH = gql`
	query GetLaunch($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`;

const Launch = (props) => {
	let { flight_number } = props.match.params;
	flight_number = parseInt(flight_number);
	const { loading, error, data } = useQuery(GET_LAUNCH, { variables: { flight_number } });

	console.log(data);
	return <React.Fragment>Launch</React.Fragment>;
};

export default Launch;
