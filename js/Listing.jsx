// @flow

import React, { Component } from 'react';

class Listing extends Component {
    constructor(props) {
      super(props);

      this.loopListing = this.loopListing.bind(this);
    }
    props: {
      global: string,
      property: Array<Property>,
      handleOnChange: Function,
      handleOnChangeView: Function
    }
     loopListing = () => {

       if(this.props.property === undefined || this.props.property.length === 0) {
         return "Sorry that search doesn't match any listing";
       }

      return this.props.property.map(listing => {
        // this is the responsive view
        if (this.props.global.view === 'resp') {
        return (<div className="col-lg-6" key={listing.id}>
          <div className="listing">
            <div className="listing-img">
              <span className="address">{listing.address}</span>
              <img alt={listing.type} src={`/public/img/property/${listing.image}`} />
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
                      <span>{listing.beds}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-rent">
              <span className="rent">${listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                {listing.area}
              </span>
            </div>
          </div>
        </div>)
      }
        // This is the grid view
        return (<div className="col-md-3" key={listing.id}>
          <div className="listing">
            <div className="listing-img">
              <span className="address">{listing.address}</span>
              <img alt={listing.type} src={`/public/img/property/${listing.image}`} />
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
                      <span>{listing.beds}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-rent">
              <span className="rent">${listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true" />
                {listing.area}
              </span>
            </div>
          </div>
        </div>)

    })
  }


  render() {
    return (
      <div className="listings">

        <section className="listing-heading">
          <h2>Short stay</h2>
          <input type="text" name="search" placeholder="search..." onChange={this.props.handleOnChange}/>
          <hr />
        </section>

        <section className="listing-sort">
          <span className="results">3920 results found</span>
          <div className="listing-sortOptions">
            <select name="sortBy" className="sortBy" onChange={this.props.handleOnChange}>
              <option value="price-dsc">Lowest Price</option>
              <option value="price-asc">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true" onClick={this.props.handleOnChangeView('resp')} />
              <i className="fa fa-th" aria-hidden="true" onClick={this.props.handleOnChangeView('grid')} />
            </div>
          </div>
        </section>

        <section className="listing-results">

            {this.loopListing()}

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
    }
  }

export default Listing;
