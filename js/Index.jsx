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
      city: 'All',
      type: 'All',
      beds: 0,
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
      filterData: load.property,
      populateFormsData: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.populateForms = this.populateForms.bind(this);
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
    let data = this.state.load.property.filter(property =>
      property.price >= this.state.min_price && property.price <= this.state.max_price &&
      property.floorspace >= this.state.min_floorspace && property.floorspace <= this.state.max_floorspace &&
      property.beds >= this.state.beds);

    if(this.state.city !== 'All') {
      data = data.filter(property => property.city === this.state.city);
    }

    if(this.state.type !== 'All') {
      data = data.filter(property => property.type === this.state.type);
    }

    this.setState({
      filterData: data
    });
  }

  // Extracting out data to distribute to form fields
  populateForms = () => {

    let cities = this.state.load.property.map(property => property.city);
    // set object stores unique values of data then converts from a set to an new array
    cities = Array.from(new Set(cities));

    let types = this.state.load.property.map(property => property.type);
    types = Array.from(new Set(types));

    let beds = this.state.load.property.map(property => property.beds);
    beds = Array.from(new Set(beds));

    this.setState({
      populateFormsData: {
        types,
        beds,
        cities
      }
    })
  }


  render() {
    return (
      <div className="app">
        <Header />
        <section>
          <Filter property={load.property} handleOnChange={this.handleOnChange} global={this.state} populateAction={this.populateForms} />
          <Listing property={this.state.filterData}  />
        </section>
      </div>
    )
  }
}

export default Index;
