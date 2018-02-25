// @flow

import React, { PureComponent } from 'react';

class Filter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      onChange: 'this is a debug',
      price: 0,
      floorspace: 0,
      radius: 0,
      elevator: false,
      garage: false,
      basement: false,
      gym: false,
      fireplace: false,
      swimming_pool: false

    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange (event) {
    let name = event.target.name;
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({ [name]: value }, () => { console.log(this.state)});
  }

  render() {
    return (
      <div className="filters">
        <div className="inside">
          <h4 className="filter-title">Filter</h4>
          <select name="neighbourhood" className="filters neighbourhood" onChange={this.handleOnChange}>
            <option value="WhitePlains">White Plains</option>
            <option value="Eastchester">Eastchester</option>
            <option value="Bronxville">Bronxville</option>
            <option value="Scarsdale">Scarsdale</option>
          </select>
          <select name="housetype" className="filters housetype" onChange={this.handleOnChange}>
            <option value="Single Family">Single Family</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Condo">Condo</option>
          </select>
          <select name="bedroom" className="filters bedroom" onChange={this.handleOnChange}>
            <option value="1 BR">1 BR</option>
            <option value="2 BR">2 BR</option>
            <option value="3 BR">3 BR</option>
          </select>
          <div id="slidecontainer">
            <div className="price">
              <span className="title">price</span>
              <input readOnly="true" name="price" type="range" min_price="1" max_price="10000000" onChange={this.handleOnChange} className="price" />
            </div>
            <div className="floorspace">
              <span className="title">floor space</span>
              <input readOnly="true" name="floorspace" type="range" min_floorspace="1" max_floorspace="100000" onChange={this.handleOnChange} className="floorspace" />
            </div>
            <div className="radius">
              <span className="title">radius</span>
              <input readOnly="true" name="radius" type="range" min_radius="1" max_radius="1000" onChange={this.handleOnChange} className="radius" />
            </div>
          </div>
          <div className="filters extras">
            <h4>Facilities</h4>
            <label htmlFor="extras">
              <span>Elevator</span>
              <input name="elevator" value="elevator" type="checkbox" onChange={this.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Garage</span>
              <input name="garage" value="garage" type="checkbox" onChange={this.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Basement</span>
              <input name="basement" value="basement" type="checkbox" onChange={this.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input name="gym" value="gym" type="checkbox" onChange={this.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Fireplace</span>
              <input name="fireplace" value="fireplace" type="checkbox" onChange={this.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Swimming pool</span>
              <input name="swimming_pool" value="swimming pool" type="checkbox" onChange={this.handleOnChange}/>
            </label>
          </div>
        </div>
      </div>
    )
  }
}




export default Filter;
