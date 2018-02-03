// @flow

import React from 'react';
import Listing from './Listing';

const RealEstate = (props: {
  property: Array<Property>
}) => (
  <div className="listings">

    <section className="listing-heading">
      <h2>Short stay</h2>
      <input type="text" name="search" />
      <hr />
    </section>

    <section className="listing-sort">
      <span className="results">3920 results found</span>
      <div className="listing-sortOptions">
        <select name="sortby" className="sortby">
          <option value="price-asc">Date Descending</option>
          <option value="price-asc">Date Ascending</option>
        </select>
        <div className="view">
          <i className="fa fa-th-list" aria-hidden="true" />
          <i className="fa fa-th" aria-hidden="true" />
        </div>
      </div>
    </section>

    <section className="listing-results">

        {props.property.map(properties => <Listing {...properties} key={properties.id}/>)}

    </section>

    <section id="listing-pagination">
      <ul className="pagination-pages">
        <li className="prev">Prev</li>
        <li className="active">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li className="next">Next</li>
      </ul>
    </section>
  </div>
);






export default RealEstate;
