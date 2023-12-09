import React, { useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import './homepagestyle.css'; // Import the CSS file here
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import Navbar from "../navbar/navbar";

Chart.register( ...registerables, zoomPlugin );

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

  const deleteLastPoint = () =>
  {
    const newPoints = dataPoints.slice( 0, -1 );
    setDataPoints( newPoints );
  };

  const refreshChart = () =>
  {
    setDataPoints( [] );
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
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
        pan: {
          enabled: true,
          mode: 'xy',
        }
      }
    }
  };

  return (
    <>
      <Navbar />
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
        <button onClick={deleteLastPoint}>Delete Last Point</button>
        <button onClick={refreshChart}>Refresh Chart</button>
      <div className="chart-container">
        <Scatter data={data} options={options} />
      </div>
      </div>
    </>
  );
};
