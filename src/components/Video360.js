import React from 'react';
import { Environment, NativeModules, asset } from 'react-360';

export default class Video360 extends React.Component {
  componentDidMount() {
    NativeModules.Custom360VideoModule.createPlayer(
      'my360video',
      asset('https://my.matterport.com/show/?m=jXm2osB8s9K')
    );
  }

  render() {
    return (
      <Environment>
        <video
          source={{ uri: 'my360video' }}
          style={{ width: '100%', height: '100%' }}
          autoPlay={true}
          loop={true}
        />
      </Environment>
    );
  }
}
