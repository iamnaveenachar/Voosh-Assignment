import React from 'react';

export default function Filter({ sorts, sorting, cat, filteringName }) {
  return (
    <div>
      <div className="select_filter">
        {/* filtering  by name*/}
        <select value={cat} onChange={filteringName}>
          <option value="all">All</option>
          <option value="vegan">vegan</option>
          <option value="veg">veg</option>
          <option value="Meat">Meat</option>
          <option value="North Indian">North Indian</option>
          <option value="Italian">Italian</option>
          <option value="chinese">chinese</option>
          <option value="Beverages">Beverages</option>
        </select>
      </div>

      {/* Sorting */}
      <div className="select_filter">
        <select value={sorts} onChange={sorting}>
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
        {sorts}
      </div>
    </div>
  );
}
