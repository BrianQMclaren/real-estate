// @flow

import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listing from './Listing';
import load from '../data.json';

class Index extends Component {
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
      filterData: load.property
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
    const data = this.state.load.property.filter(property => property.price >= this.state.min_price);
    this.setState({
      filterData: data
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <section>
          <Filter handleOnChange={this.handleOnChange} global={this.state}  />
          <Listing property={this.state.filterData}  />
        </section>
      </div>
    )
  }
}

export default Index;
