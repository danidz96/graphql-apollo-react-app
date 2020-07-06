import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Descriptions, Button } from 'antd';
import Moment from 'react-moment';

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
  const { loading, data } = useQuery(GET_LAUNCH, { variables: { flight_number } });
  return (
    <React.Fragment>
      {loading && <p>Loading...</p>}

      {!loading && (
        <React.Fragment>
          <h1>
            Mission: <span>{data.launch.mission_name}</span>
          </h1>
          <h2>Launch Details</h2>
          <Descriptions>
            <Descriptions.Item label="Flight Number">{data.launch.flight_number}</Descriptions.Item>
            <Descriptions.Item label="Launch Year">{data.launch.launch_year}</Descriptions.Item>
            <Descriptions.Item label="Launch Success">{data.launch.launch_success}</Descriptions.Item>
            <Descriptions.Item label="Launch Date Local">
              <Moment format="DD-MM-YYYY HH:mm">{data.launch.launch_date_local}</Moment>
            </Descriptions.Item>
          </Descriptions>
          <h2>Rocket Details</h2>
          <Descriptions>
            <Descriptions.Item label="Rocket ID">{data.launch.rocket.rocket_id}</Descriptions.Item>
            <Descriptions.Item label="Rocket Name">{data.launch.rocket.rocket_name}</Descriptions.Item>
            <Descriptions.Item label="Rocket Type">{data.launch.rocket.rocket_type}</Descriptions.Item>
          </Descriptions>
          <Link to={`/`}>
            <Button>Back</Button>
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Launch;
