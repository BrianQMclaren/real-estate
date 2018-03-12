// @flow

import React from 'react';
import Header from './Header';
import Filter from './Filter';
import RealEstate from './RealEstate';
import load from '../data.json';

const Index = () => (
  <div className="app">
    <Header />
    <section>
      <Filter property={load.property}  />
      <RealEstate property={load.property} />
    </section>
  </div>
);

export default Index;
