import React from 'react';
import { Card, Col, Button, Row, Tag, Typography } from 'antd';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import './LaunchItem.css';

const { Title } = Typography;

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
	return (
		<Card className="card">
			<Col span={20}>
				<div className="missionData">
					<Title level={2}>Mission: {mission_name}</Title>
					<div className="statusBudget">
						<Tag color={launch_success ? 'green' : 'red'}>{launch_success ? 'Success' : 'Fail'}</Tag>
					</div>
				</div>
				<p>
					<Moment format="DD-MM-YYYY HH:mm">{launch_date_local}</Moment>
				</p>
				<p>{launch_success}</p>
			</Col>
			<Col span={4}>
				<Link to={`/launch/${flight_number}`}>
					<Button>Launch Details</Button>
				</Link>
			</Col>
		</Card>
	);
};

export default LaunchItem;
