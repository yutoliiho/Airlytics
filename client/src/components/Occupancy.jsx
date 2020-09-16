import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  // background-color: lightblue;
`
class Occupancy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <MainDiv>
      <center>
        <p>Occupancy</p>
        <h1 style={{ padding: '30px', fontSize: '59px', color: 'darkgrey' }}
        >{this.props.occupancy}</h1>

        <p src="google.com">view detail</p>
      </center >
      // </MainDiv>
    );
  }
}

export default Occupancy;
