import React from 'react';
import { Segment } from 'semantic-ui-react';
import '../styles/welcome.css';

export default props => (
    <Segment className="jumbotron" basic loading={props.loading}>
        <h1 className="welcome-text">
            Welcome !
        </h1>
    </Segment>
);