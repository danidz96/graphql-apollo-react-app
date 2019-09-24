import React from 'react';
import { Card, Col, Button, Row, Tag, Typography } from 'antd';
import Moment from 'react-moment';
import './LaunchItem.css';

const { Title } = Typography;

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
	return (
		<Card className="card">
			<Col span={20}>
				<Row className="missionData">
					<Title level={2}>Mission: {mission_name}</Title>
					<Tag className="statusBudget" color={launch_success ? 'green' : 'red'}>
						{launch_success ? 'Success' : 'Fail'}
					</Tag>
				</Row>
				<p>
					<Moment format="DD-MM-YYYY HH:mm">{launch_date_local}</Moment>
				</p>
				<p>{launch_success}</p>
			</Col>
			<Col span={4}>
				<Button>Launch Details</Button>
			</Col>
		</Card>
	);
};

export default LaunchItem;
