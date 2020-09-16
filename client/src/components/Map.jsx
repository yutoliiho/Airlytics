import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const center = {
  lat: -3.745,
  lng: -38.523
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    }
    this.setMap = this.setMap.bind(this);
  }

  setMap() {
    this.setState({
      map: null
    })
  }

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])
  render() {
    const center = {
      lat: -3.745,
      lng: -38.523
    };
    return (
      <LoadScript
        googleMapsApiKey='AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'
      >
        {/* // mapContainerStyle={containerStyle} */}
        <GoogleMap
          center={center}
          zoom={10}
        />
      </GoogleMap>
    </LoadScript >
  )
  }
}

export default React.memo(MapContainer)
// export default MapContainer
// export default connect(
//   mapStateToProps,
//   { saveMapCoords }
// )(
//   GoogleApiWrapper({
//     apiKey: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'
//   })(Maps)
// )