import React from 'react';

export default function Outlet(props) {
  return (
    <div className="single_outlet">
      <h1>{props.outlet.title}</h1>
      <p>{props.outlet.desc}</p>
      <h3>$ {props.outlet.price}</h3>
    </div>
  );
}
