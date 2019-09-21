import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from '../LaunchItem/LaunchItem';

const GET_LAUNCHES = gql`
	query GetLaunches {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

const Launches = () => {
	const { loading, error, data } = useQuery(GET_LAUNCHES);

	return (
		<React.Fragment>
			<h1>Launches</h1>
			{loading && <p>Loading...</p>}
			{!loading &&
				!error &&
				data.launches.map((launch) => <LaunchItem key={launch.mission_name} launch={launch} />)}
			{error && <p>Something went wrong</p>}
		</React.Fragment>
	);
};

export default Launches;
