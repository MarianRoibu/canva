import React, { useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import './homepagestyle.css'; // Import the CSS file here
import { Chart, registerables } from 'chart.js';
Chart.register( ...registerables );


export const HomePage = () =>
{
  const [dataPoints, setDataPoints] = useState( [] );
  const [currentPoint, setCurrentPoint] = useState( { x: '', y: '' } );

  const handleInputChange = ( e ) =>
  {
    setCurrentPoint( { ...currentPoint, [e.target.name]: parseFloat( e.target.value ) } );
  };

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    if ( currentPoint.x && currentPoint.y )
    {
      setDataPoints( [...dataPoints, currentPoint] );
      setCurrentPoint( { x: '', y: '' } );
    }
  };

  const data = {
    datasets: [{
      label: 'User Data',
      data: dataPoints,
      backgroundColor: 'blue',
      showLine: true,
      borderColor: 'red',
      borderWidth: 2
    }]
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'X value'
        }
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Y value'
        }
      }
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="title">Data Input and Visualization</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="number"
          name="x"
          value={currentPoint.x}
          onChange={handleInputChange}
          placeholder="X value"
        />
        <input
          type="number"
          name="y"
          value={currentPoint.y}
          onChange={handleInputChange}
          placeholder="Y value"
        />
        <button type="submit">Add Point</button>
      </form>
      <div className="chart-container">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};
