import React, { Component } from 'react';
import Filter from './Filter';
import BarChart from './BarChart';
import './App.css';
import { Data } from './data';
import Outlets from './Outlets';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      outlets: localStorage.getItem('data')
        ? JSON.parse(localStorage.getItem('data'))
        : Data,
      sort: localStorage.getItem('sort')
        ? JSON.parse(localStorage.getItem('sort'))
        : '',
      cat: '',
    };
  }

  //Sorting

  sorting = (e) => {
    // console.log(e.target.value);
    const sorting = e.target.value;
    const sortRes = this.state.outlets.sort((a, b) => {
      if (sorting === 'all') {
        return a.id > b.id ? 1 : -1;
      }
      if (sorting === 'low') {
        return a.price > b.price ? 1 : -1;
      }
      if (sorting === 'high') {
        return a.price < b.price ? 1 : -1;
      }
    });

    this.setState(
      {
        sort: sorting,
        outlets: sortRes,
      },
      () => {
        localStorage.setItem('sort', JSON.stringify(this.state.sort));
        localStorage.setItem('data', JSON.stringify(this.state.outlets));
      }
    );
  };

  //filtering by name
  filteringName = (e) => {
    let categ = e.target.value;
    if (categ === 'all') {
      this.setState({
        cat: categ,
        outlets: Data,
      });
    } else {
      this.setState({
        cat: categ,
        outlets: Data.filter((outlet) => {
          return outlet.category === e.target.value;
        }),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Filter
          sorting={this.sorting}
          sorts={this.state.sort}
          filteringName={this.filteringName}
          cat={this.state.cat}
        />
        <Outlets outlets={this.state.outlets} />
        <BarChart />
      </div>
    );
  }
}
