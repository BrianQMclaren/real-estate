// @flow

import React, { PureComponent } from 'react';

class Listing extends PureComponent {

  props: { type: string, beds: number, price: number, address: string, image: string, area: string };
  render() {
    return (
          <div className="col-md-3">
            <div className="listing">
              <div className="listing-img">
                <span className="address">{this.props.address}</span>
                <img alt={this.props.type} src={`/public/img/property/${this.props.image}`} />
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
                        <span>{this.props.beds}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-rent">
                <span className="price">{this.props.price} / month</span>
                <span className="location">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  {this.props.area}
                </span>
              </div>
            </div>
          </div>
        );
      }
    }

export default Listing;
