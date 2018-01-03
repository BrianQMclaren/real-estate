import React from 'react';

const Filter = () => (
  <div className="filters">
    <div className="inside">
      <h4 className="filter-title">Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood">
        <option>Neighbourhood</option>
      </select>
      <select name="housetype" className="filters housetype">
        <option>Type of House</option>
      </select>
      <select name="bedroom" className="filters bedroom">
        <option>Interior</option>
      </select>
      <div id="slidecontainer">
        <div className="price">
        <span className="title">price</span>
        <input name="price" type="range" min="1" max="100" value="55" className="price" />
      </div>
      <div className="floorspace">
        <span className="title">floor space</span>
        <input name="floorspace" type="range" min="1" max="100" value="35" className="floorspace" />
      </div>
      <div className="radius">
        <span className="title">radius</span>
        <input name="radius" type="range" min="1" max="100" value="75" className="radius" />
      </div>
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
