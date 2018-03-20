// @flow

import React, { PureComponent } from 'react';

class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.cities = this.cities.bind(this);
    this.types = this.types.bind(this);
    this.beds = this.beds.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }
  props: {
    global: string,
    handleOnChange: Function,
    populateAction: Function
  }
  cities = () => {
    if(this.props.global.populateFormsData.cities !== undefined) {
      const { cities } = this.props.global.populateFormsData;
      return cities.map( (property) => <option key={property} value={property}> {property}</option>);
    }
    return false;
  }
  types = () => {
    if(this.props.global.populateFormsData.types !== undefined) {
      const { types } = this.props.global.populateFormsData;
      return types.map( (property) => <option key={property} value={property}> {property}</option>);
    }
    return false;
  }
  beds = () => {
    if(this.props.global.populateFormsData.beds !== undefined) {
      const { beds } = this.props.global.populateFormsData;
      return beds.map( (property) => <option key={property} value={property}> {property}+ BR</option>);
    }
    return false;
  }

  render() {
    return (
      <div className="filters">
        <div className="inside">
          <h4 className="filter-title">Filter</h4>
          <label htmlFor="city">City</label>
          <select name="city" className="filters city" onChange={this.props.handleOnChange}>
            <option value="all">All</option>
            {this.cities()}
          </select>
          <label htmlFor="type">Home Type</label>
          <select name="type" className="filters type" onChange={this.props.handleOnChange}>
            <option value="all">All</option>
            {this.types()}
          </select>
          <label htmlFor="beds">Beds</label>
          <select name="beds" className="filters beds" onChange={this.props.handleOnChange}>
            {this.beds()}
          </select>
          <form>
            <div className="m-price">
                <label htmlFor="price">Price</label>
                <input name="min_price" value={this.props.global.min_price} onChange={this.props.handleOnChange} className="price" />
                <input name="max_price" value={this.props.global.max_price} onChange={this.props.handleOnChange} className="price" />
            </div>
            <div className="m-floorspace">
                <label htmlFor="floorspace">Floor Space</label>
                <input name="min_floorspace" value={this.props.global.min_floorspace} onChange={this.props.handleOnChange} className="floorspace" />
                <input name="max_floorspace" value={this.props.global.max_floorspace} onChange={this.props.handleOnChange} className="floorspace" />
            </div>
          </form>
          <div className="filters extras">
            <h4>Facilities</h4>
            <label htmlFor="extras">
              <span>Elevator</span>
              <input name="elevator" value="elevator" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Garage</span>
              <input name="garage" value="garage" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Basement</span>
              <input name="basement" value="basement" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Landry</span>
              <input name="landry" value="landry" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input name="gym" value="gym" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Fireplace</span>
              <input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Swimming pool</span>
              <input name="pool" value="pool" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
          </div>
        </div>
      </div>
    )
  }
}




export default Filter;
