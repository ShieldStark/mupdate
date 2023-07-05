import React from 'react';
import './HoverEnlarge.css'; // We'll create this CSS file in the next step

const HoverEnlarge = () => {
  return (
    <div className="hover-enlarge">
      <div className="small-element">Hover over me!</div>
      <div className="enlarged-element">Enlarged element</div>
    </div>
  );
};

export default HoverEnlarge;
