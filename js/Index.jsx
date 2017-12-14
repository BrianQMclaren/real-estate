import React from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listing';

const Index = () => (
  <div className="app">
    <Header />
    <section className="">
      <Filter />
      <Listings />
    </section>
  </div>
);

export default Index;
