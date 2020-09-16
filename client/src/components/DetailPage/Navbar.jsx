import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{ padding: '35px' }}>
          {/* sub start*/}
          <div style={{ padding: '5px' }} >
            <h4>Research</h4>
            <div style={{ paddingLeft: '15px', lineHeight: "40px" }}>
              <div>Overview</div>
              <div>Occupancy</div>
              <div>Rate</div>
              <div>Revenue</div>
            </div>
          </div>
          {/* sub */}
          <div style={{ padding: '5px' }}>
            <h4>Price</h4>
            <div style={{ paddingLeft: '15px', lineHeight: "40px" }}>
              <div>Pricing</div>
              <div>Demand</div>
              <div>Forcast</div>
              <div>Seasonality</div>
            </div>
          </div>
          {/* sub */}
          <div style={{ padding: '5px' }}>
            <h4>Manage</h4>
            <div style={{ paddingLeft: '15px', lineHeight: "40px" }}>
              <div>My Property 1</div>
              <div>My Property 2</div>
              <div>My Property 3</div>
              <div>My Property 4</div>
            </div>
          </div>
          {/* sub end*/}
        </div>
      </div>
    );
  }
}

export default Navbar;
