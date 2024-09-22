import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const MapComponent = () => {
  const colorScale = scaleLinear()
    .domain([0, 100])
    .range(['#0a2f1f', '#28ff47']);

  const mockData = [
    { id: 'CA', value: 80 },
    { id: 'TX', value: 60 },
    { id: 'NY', value: 75 },
    // Add more mock data for other states
  ];

  return (
    <div className="h-96">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateData = mockData.find((d) => d.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={stateData ? colorScale(stateData.value) : '#0a2f1f'}
                  stroke="#28ff47"
                  strokeWidth={0.5}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapComponent;