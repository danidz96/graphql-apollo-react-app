import React from 'react';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
	return (
		<div>
			<p>{flight_number}</p>
			<p>{mission_name}</p>
			<p>{launch_date_local}</p>
			<p>{launch_success}</p>
		</div>
	);
};

export default LaunchItem;
