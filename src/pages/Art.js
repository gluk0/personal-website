import React from 'react';
import SketchWrapper from '../components/SketchWrapper';
import voronoi_sketch from '../sketches/voronoi_point';

const Art = () => {
  return (
    <div style={{ padding: '20px' }}>
      <SketchWrapper sketch={voronoi_sketch} />
    </div>
  );
};

export default Art; 