import React from 'react';
import { Message, Icon } from 'semantic-ui-react';

export default ()=> (
    <Message warning attached="bottom">
      <Icon name='warning' />
        You are trying to reach not existing page! 
    </Message>
);
