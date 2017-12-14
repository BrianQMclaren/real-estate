import React from 'react';

const Listings = () => (
  <div className="Listings">
    <section className="listing-heading">
      <input type="text" name="search" />
    </section>
    <section className="listing-sort">
      <div>390 results found</div>
      <div className="listing-sortOptions">
        <select name="sortby" className="sortby">
          <option value="price-asc">Highest Price</option>
          <option value="price-asc">Lowest Price</option>
        </select>
        <div className="view">
          <i className="fa fa-th-list" aria-hidden="true" />
          <i className="fa fa-th" aria-hidden="true" />
        </div>
      </div>
    </section>
    <section className="listing-results">
      <div className="listing">
        <div className="listing-img">
          <span className="address">Address</span>
          <div className="details">
            <div className="user-img">
              <div className="user-details">
                <span className="user-name">Nina Smith</span>
                <span className="post-date">05/05/2017</span>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="fa fa-square-o" aria-hidden="true" />
                    <span>1000 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true" />
                    <span>3 bedrooms</span>
                  </div>
                </div>
              </div>
              <div className="listing-rent">
                <span>$2000 / month</span>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true" />Harlem,
                  NY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="listing-pagination">
      <ul className="pagination-num">
        <li>Prev</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>Next</li>
      </ul>
    </section>
  </div>
);

export default Listings;
