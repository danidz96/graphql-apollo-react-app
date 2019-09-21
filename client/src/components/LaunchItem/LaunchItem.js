import React from 'react';
import { Card, Col, Button } from 'antd';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
	return (
		<Card
			style={{ width: '100%', marginBottom: '20px' }}
			cover={
				<img
					alt="example"
					style={{ width: '100%', height: '200px', objectFit: 'cover' }}
					src="https://img.youtube.com/vi/0a_00nJ_Y88/0.jpg"
				/>
			}
		>
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
