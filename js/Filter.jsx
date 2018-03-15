// @flow

import React, { PureComponent } from 'react';

class Filter extends PureComponent {
  props: {
    handleOnChange: Function,
    global: string
  }
  render() {
    return (
      <div className="filters">
        <div className="inside">
          <h4 className="filter-title">Filter</h4>
          <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.handleOnChange}>
            <option value="WhitePlains">White Plains</option>
            <option value="Eastchester">Eastchester</option>
            <option value="Bronxville">Bronxville</option>
            <option value="Scarsdale">Scarsdale</option>
          </select>
          <select name="housetype" className="filters housetype" onChange={this.props.handleOnChange}>
            <option value="Single Family">Single Family</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Condo">Condo</option>
          </select>
          <select name="bedroom" className="filters bedroom" onChange={this.props.handleOnChange}>
            <option value="1 BR">1 BR</option>
            <option value="2 BR">2 BR</option>
            <option value="3 BR">3 BR</option>
          </select>
          <div id="slidecontainer">
            <div className="price">
              <span className="title">price</span>
              <input name="min_price" value={this.props.global.min_price} onChange={this.props.handleOnChange} className="price" />
              <input name="max_price" value={this.props.global.max_price} onChange={this.props.handleOnChange} className="price" />
            </div>
            <div className="floorspace">
              <span className="title">floor space</span>
              <input name="min_floorspace" value={this.props.global.min_floorspace} onChange={this.props.handleOnChange} className="floorspace" />
              <input name="max_floorspace" value={this.props.global.max_floorspace} onChange={this.props.handleOnChange} className="floorspace" />
            </div>
          </div>
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
              <span>Gym</span>
              <input name="gym" value="gym" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Fireplace</span>
              <input name="fireplace" value="fireplace" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
            <label htmlFor="extras">
              <span>Swimming pool</span>
              <input name="swimming_pool" value="swimming pool" type="checkbox" onChange={this.props.handleOnChange}/>
            </label>
          </div>
        </div>
      </div>
    )
  }
}




export default Filter;
