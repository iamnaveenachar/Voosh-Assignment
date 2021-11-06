import React from 'react';
import Outlet from './Outlet';

export default function Outlets(props) {
  return (
    <div className="outlets">
      {props.outlets.map((outlet) => (
        <Outlet key={outlet.id} outlet={outlet} />
      ))}
    </div>
  );
}
