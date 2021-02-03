import React from 'react';
import './ResourceItem.scss';

export default function ResourceItem({ image, text }) {
  return (
    <div className="resourceItem">
      <img src={image} />
      <p>{text}</p>
    </div>
  );
}