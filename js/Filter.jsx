import React from 'react';

const Filter = () => (
  <div className="filters">
    <div className="inside">
      <h4>Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood">
        <option>Harlem</option>
      </select>
      <select name="housetype" className="filters housetype">
        <option>Brownstone</option>
      </select>
      <select name="bedroom" className="filters bedroom">
        <option>3 BR</option>
      </select>
      <div id="slidecontainer" className="filters-price">
        <span className="title">Price</span>
        <input
          name="price"
          type="range"
          min="1"
          max="100"
          value="55"
          className="price"
        />
      </div>
      <div id="slidecontainer" className="floor-space">
        <span className="title">Floorspace</span>
        <input
          name="floorspace"
          type="range"
          min="1"
          max="100"
          value="35"
          className="floorspace"
        />
      </div>
      <div id="slidecontainer" className="floor-radius">
        <span className="title">Radius</span>
        <input
          name="radius"
          type="range"
          min="1"
          max="100"
          value="75"
          className="radius"
        />
      </div>
      <div className="filters extras">
        <h4>Facilities</h4>
        <label htmlFor="extras">
          <span>Elevator</span>
          <input name="extras" value="elevator" type="checkbox" />
        </label>
        <label htmlFor="extras">
          <span>Storage</span>
          <input name="extras" value="swimming pools" type="checkbox" />
        </label>
        <label htmlFor="extras">
          <span>Bath Tub</span>
          <input name="extras" value="basement" type="checkbox" />
        </label>
        <label htmlFor="extras">
          <span>Separate Shower</span>
          <input name="extras" value="gym" type="checkbox" />
        </label>
        <label htmlFor="extras">
          <span>Fireplace</span>
          <input name="extras" value="gym" type="checkbox" />
        </label>
        <label htmlFor="extras">
          <span>Swimming pool</span>
          <input name="extras" value="gym" type="checkbox" />
        </label>
      </div>
    </div>
  </div>
);

export default Filter;
