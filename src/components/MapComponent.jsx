import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useElectionData } from '../hooks/useElectionData';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const MapComponent = () => {
  const [position, setPosition] = useState({ coordinates: [-82, 28], zoom: 6 });
  const [filter, setFilter] = useState({
    demographic: 'all',
    socioeconomic: 'all',
    affiliation: 'all',
    sentiment: 'all'
  });

  const { data: electionData, isLoading, error } = useElectionData(filter);

  const colorScale = scaleLinear()
    .domain([0, 50, 100])
    .range(['#0a2f1f', '#18992b', '#28ff47']);

  const handleZoomIn = () => {
    if (position.zoom >= 10) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
  }

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
  }

  const handleMoveEnd = (position) => {
    setPosition(position);
  }

  const handleFilterChange = (e) => {
    setFilter(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  if (isLoading) return <div className="text-cyber-green-400">Loading map data...</div>;
  if (error) return <div className="text-cyber-green-400">Error loading map data</div>;

  return (
    <div className="relative h-[500px] bg-cyber-black border border-cyber-green-700 rounded-lg overflow-hidden">
      <div className="absolute top-2 left-2 z-10 space-y-2">
        <Button onClick={handleZoomIn} className="bg-cyber-green-700 text-cyber-black">+</Button>
        <Button onClick={handleZoomOut} className="bg-cyber-green-700 text-cyber-black">-</Button>
      </div>
      <div className="absolute top-2 right-2 z-10 space-y-2">
        <Select name="demographic" onChange={handleFilterChange} className="bg-cyber-black text-cyber-green-400 border-cyber-green-700">
          <option value="all">All Demographics</option>
          <option value="young">Young Voters</option>
          <option value="senior">Senior Voters</option>
        </Select>
        <Select name="socioeconomic" onChange={handleFilterChange} className="bg-cyber-black text-cyber-green-400 border-cyber-green-700">
          <option value="all">All Socioeconomic</option>
          <option value="low">Low Income</option>
          <option value="high">High Income</option>
        </Select>
        <Select name="affiliation" onChange={handleFilterChange} className="bg-cyber-black text-cyber-green-400 border-cyber-green-700">
          <option value="all">All Affiliations</option>
          <option value="democrat">Democrat</option>
          <option value="republican">Republican</option>
          <option value="independent">Independent</option>
        </Select>
        <Select name="sentiment" onChange={handleFilterChange} className="bg-cyber-black text-cyber-green-400 border-cyber-green-700">
          <option value="all">All Sentiment</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="neutral">Neutral</option>
        </Select>
      </div>
      <ComposableMap projection="geoAlbersUsa" className="h-full w-full">
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isFloridaCounty = geo.properties.name === "Florida" || (geo.properties.state === "FL" && geo.properties.lsad === "County");
                if (!isFloridaCounty) return null;
                const countyData = electionData.find(d => d.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={countyData ? colorScale(countyData.value) : "#0a2f1f"}
                    stroke="#28ff47"
                    strokeWidth={0.5}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className="absolute bottom-2 left-2 right-2 z-10">
        <Input 
          placeholder="Search Florida county..." 
          className="bg-cyber-black text-cyber-green-400 border-cyber-green-700"
        />
      </div>
    </div>
  );
};

export default MapComponent;
