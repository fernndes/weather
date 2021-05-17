import React from 'react'
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer, XAxis } from 'recharts';


function Graph({ data }) {

    const activeDot = (props) => {
        const { cx, cy, stroke, index } = props;
        return (
            <svg key={index} x={cx - 8} y={cy - 8} width={16} height={16} fill="#f57542" viewBox="0 0 100 100" cursor="pointer">
                <circle cx="50%" cy="50%" r="50" fill="#f57542" stroke={stroke} strokeWidth="25" />
            </svg>
        );
    }

    return (
        <div className="chart">
            <h2 style={{ padding: '2rem 0' }}>Next 7 days</h2>
            {data && <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="date" hide={true} />
                    <Tooltip />
                    <Line type="linear" dataKey="max" stroke="#f57542" activeDot={activeDot} />
                    <Line type="linear" dataKey="min" stroke="#51c4b1" />
                </LineChart>
            </ResponsiveContainer>
            }
        </div>
    )
}

export default Graph