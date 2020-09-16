import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import Header from './DetailPage/Header.jsx';
import OccupancyChart from './OccupancyChart.jsx';
import Navbar from './DetailPage/Navbar.jsx';
import Main from './DetailPage/Main.jsx';
import Occupancy from './Occupancy.jsx';
import PriceChart from './PriceChart.jsx';
import RentalGrowth from './RentalGrowth.jsx';
import ActiveListings from './ActiveListings.jsx';

// import MapContainer from './Map.jsx'

var getState = require('../../utils/getState.js').getState;
var dummyData = require('../../../db/dummyData').dummyData;
var getListings = require('../../../db/getListings').getListings;
var APIKEY = require('../../../api/index').APIKEY;
const axios = require('axios')

const HeaderDiv = styled.div`
  background-color: #184D75;
  // MistyRose;
  width: 100%;
  height: 100px
`
const BodyDiv = styled.div`
display:flex;
flex-direction:row;
justify-content: stretch
`
const NavbarDiv = styled.div`
display:flex;
flex-direction:column;
width: 400px;
height: 120vh;
background-color: WhiteSmoke
    `
const MainDiv = styled.div`
display:flex;
flex-direction:column;
width: 100%;
`
// const = styled.``
// const = styled.``
// const = styled.``
// const = styled.``
// const = styled.``
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      occupancy: '',
      // dummyData: dummyData,
      // getListings: getListings
      sumListings: undefined,
    };
    this.getLocation = this.getLocation.bind(this);
    this.showSumMatrixs = this.showSumMatrixs.bind(this);
    this.showListings = this.showListings.bind(this);
  }
  getLocation(location) {
    // console.log(location)
    this.setState({
      location: location
    }, function () {
      this.showSumMatrixs();
      this.showListings();
    })
  }
  showSumMatrixs() {
    var zip_code = this.state.location;
    var current_state_obj = getState(zip_code);
    var current_state = current_state_obj.code;
    // var axiosCall = () => {
    axios({
      "method": "GET",
      "url": "https://mashvisor-api.p.rapidapi.com/airbnb-property/market-summary",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
        "x-rapidapi-key": APIKEY,
        "useQueryString": true
      }, "params": {
        "zip_code": zip_code,
        "state": current_state
      }
    })
      .then((response) => {
        // console.log(response.data)
        var occupancy_rate = response.data.content.occupancy_histogram.average_occupancy.toFixed(2) + '%'
        var sumListings = response.data.content;
        // var occupancy_histogram = sumListings.occupancy_histogram;
        // console.log(occupancy_histogram.histogram);
        this.setState({
          occupancy: occupancy_rate,
          sumListings: response.data.content,
          occupancy_histogram: sumListings.occupancy_histogram,
          occupancy_histogram_histogrm: sumListings.occupancy_histogram.histogram
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  showListings() {
    var zip_code = this.state.location;
    var state = getState(zip_code);
    axios({
      "method": "GET",
      "url": "https://mashvisor-api.p.rapidapi.com/airbnb-property/active-listings",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
        "x-rapidapi-key": APIKEY,
        "useQueryString": true
      }, "params": {
        "zip_code": zip_code,
        "page": "1",
        "city": "San Francisco",
        "items": "100",
        "state": state.code
      }
    })
      .then((response) => {
        console.log("getListings: ", response.data.content)
        this.setState({
          allListings: response.data.content.properties
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // componentDidMount() {
  //   this.showSumMatrixs();
  //   // this.showListings()
  // }
  render() {
    var occupancy_histogram = this.state.occupancy_histogram_histogrm
    // console.log(occupancy_histogram)

    // var occupancy_histogram = this.state.occupancy_histogram // array;
    // console.log(occupancy_histogram)
    return (
      <div>
        {/* Top */}
        < HeaderDiv >
          <Header getLocation={this.getLocation} />
        </HeaderDiv >
        {/* Body */}
        < BodyDiv >
          <NavbarDiv>
            <Navbar />
          </NavbarDiv>
          <MainDiv>
            {/* START ROW COMPONENTS */}
            {/* ROW ONE */}
            <div className='blank' style={{ width: "100%", height: "50px" }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <OccupancyChart
                style={{ backgroundColor: 'lightGreen', float: 'left' }}
                occupancy_histogram={occupancy_histogram}
              // sumListing={sumListing}
              />
              <Occupancy occupancy={this.state.occupancy} style={{ float: 'right' }} />
            </div>
            {/* ROW TWO */}
            <div className='blank' style={{ width: "100%", height: "50px" }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <div style={{ width: "45%" }}>
                <PriceChart
                // night_price_histogram={night_price_histogram}
                />
              </div>
              <div style={{ width: '45%', height: "auto" }}>
                Google Map (not working yet)
                <iframe src="https://www.google.com/maps?q=google+map&rlz=1C5CHFA_enUS853US853&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjOwvS79evrAhUNEqwKHRo5AC4Q_AUoAXoECBoQAw" />
              </div>
            </div>
            {/* ROW THREE */}
            <div className='blank' style={{ width: "100%", height: "50px" }}></div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <div style={{ width: "45%" }}>
                <ActiveListings />
              </div>
              <div style={{ width: '45%', height: "auto" }}>
                <RentalGrowth />
              </div>
            </div>
            {/* END ROW COMPONENTS */}
          </MainDiv>
        </BodyDiv >
      </div >
    )
  }
}

export default App;

{/* <PriceChart /> */ }
{/* <RentalGrowth /> */ }

{/* <Main
  occupancy={this.state.occupancy}
  occupancy_histogram={occupancy_histogram}
  night_price_histogram={night_price_histogram}
/> */}