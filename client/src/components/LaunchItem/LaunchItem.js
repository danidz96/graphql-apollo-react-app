import React from 'react';
import { Card, Col, Button } from 'antd';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
	return (
		<Card style={{ width: '100%', marginBottom: '20px' }}>
			<Col span={20}>
				<h1>Mission: {mission_name}</h1>
				<p>{launch_date_local}</p>
				<p>{launch_success}</p>
			</Col>
			<Col span={4}>
				<Button>Launch Details</Button>
			</Col>
		</Card>
	);
};

export default LaunchItem;
