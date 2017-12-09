import React from 'react';
import Header from './Header';
import Filter from './Filter';
import Listing from './Listing';

const Index = () => (
  <div className="app">
    <Header />
    <section className="">
      <Filter />
      <Listing />
    </section>
  </div>
);

export default Index;
