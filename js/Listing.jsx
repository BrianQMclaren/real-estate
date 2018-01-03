import React from 'react';

const Listings = () => (
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
      <div className="col-md-3">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Apartment Havenstratt</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img" />
              </div>
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
            </div>
          </div>
          <div className="listing-rent">
            <span className="price">$3095 / month</span>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true" />Palm Springs, CA
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Apartment Havenstratt</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img" />
              </div>
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
            </div>
          </div>
          <div className="listing-rent">
            <span className="price">$3095 / month</span>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true" />Palm Springs, CA
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="listing">
          <div className="listing-img">
            <span className="address">Apartment Havenstratt</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img" />
              </div>
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
            </div>
          </div>
          <div className="listing-rent">
            <span className="price">$3095 / month</span>
            <span className="location">
              <i className="fa fa-map-marker" aria-hidden="true" />Palm Springs, CA
            </span>
          </div>
        </div>
      </div>
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

export default Listings;
