import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import "./pieChartStyle.css";


export const PieChartPage = () =>
{
    // State for managing Pie chart data
    const [pieDataPoints, setPieDataPoints] = useState( [] );
    const [currentPiePoint, setCurrentPiePoint] = useState( { label: '', value: '' } );

    // Handle change in input fields
    const handlePieInputChange = ( e ) =>
    {
        setCurrentPiePoint( { ...currentPiePoint, [e.target.name]: e.target.value } );
    };

    // Handle form submission
    const handlePieSubmit = ( e ) =>
    {
        e.preventDefault();
        if ( currentPiePoint.label && currentPiePoint.value )
        {
            setPieDataPoints( [...pieDataPoints, currentPiePoint] );
            setCurrentPiePoint( { label: '', value: '' } );
        }
    };

    // Data for the Pie chart
    const pieData = {
        labels: pieDataPoints.map( point => point.label ),
        datasets: [
            {
                data: pieDataPoints.map( point => point.value ),
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'], // Add more colors as needed
            }
        ]
    };
    return (
        <div className="pie-chart-container">
            <h1 className="pie-chart-title">Pie Chart Visualization</h1>
            <form onSubmit={handlePieSubmit} className="pie-chart-form">
                <input
                    type="text"
                    name="label"
                    value={currentPiePoint.label}
                    onChange={handlePieInputChange}
                    placeholder="Label"
                />
                <input
                    type="number"
                    name="value"
                    value={currentPiePoint.value}
                    onChange={handlePieInputChange}
                    placeholder="Value"
                />
                <button type="submit">Add Data Point</button>
            </form>
            <div className="pie-chart">
                <Pie data={pieData} />
            </div>
        </div>
    );
};
