// @flow

import React from 'react';
import load from '../data.json';

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      load,
      min_price: 0,
      max_price: 10000000,
      min_floorspace: 0,
      max_floorspace: 10000,
      elevator: false,
      garage: false,
      basement: false,
      gym: false,
      fireplace: false,
      swimming_pool: false,
      filterData: load
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  handleOnChange (event) {
    const searchTerm = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
    this.setState({ [searchTerm]: value }, () => {
      console.log(this.state);
      this.filterData();
    });
  }

  filterData() {
    // const { property } = this.props;
    const data = this.state.load.property.filter(property => property.price >= this.state.min_price);
    this.setState({
      filterData: data
    });
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
              <input name="min_price" value={this.state.min_price} onChange={this.handleOnChange} className="price" />
              <input name="max_price" value={this.state.max_price} onChange={this.handleOnChange} className="price" />
            </div>
            <div className="floorspace">
              <span className="title">floor space</span>
              <input name="min_floorspace" value={this.state.min_floorspace} onChange={this.handleOnChange} className="floorspace" />
              <input name="max_floorspace" value={this.state.max_floorspace} onChange={this.handleOnChange} className="floorspace" />
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
