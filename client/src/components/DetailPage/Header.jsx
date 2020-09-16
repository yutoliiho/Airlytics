import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      zip_code: '',
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleCity(event) {
    this.setState({ city: event.target.city });
  }
  handleSubmit(event) {
    this.props.getLocation(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      // style={{ justifyContent: 'center' }}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '40px' }} >
        <div style={{ fontSize: "25px", color: "white", fontFamily: 'fangsong', fontWeight: 'bold' }}>
          Airlytics
        </div>
        {/* <div>
          other text
        </div> */}
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Zip Code' style={{
                height: '45px', width: '230px', border: "2px", padding: "10px", borderRadius: "15px"
              }} />
            </label>
            {/* <label>
              <input type="text" value={this.state.city} onChange={this.handleCity} placeholder='City'
                style={{
                  height: '45px', width: '230px', border: "2px", padding: "10px", borderRadius: "15px"
                }} />
            </label> */}
            <input type="submit" value="Submit" style={{
              height: '45px', width: '130px', border: "2px", padding: "10px", borderRadius: "15px"
            }} />
          </form>
        </div >
        <div style={{ color: 'white' }}>
          Dashboard
          <span> login</span>
        </div>
      </div >
    );
  }
}

export default Header;
