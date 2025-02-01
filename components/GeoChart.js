import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState, useEffect } from "react";

// TopoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Define countries to highlight
const asiaCountries = ["IND", "JPN"]; // Blue
const nonAsiaCountries = ["USA", "GBR", "DEU"]; // Violet

const GeoChart = () => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    // Fetch TopoJSON and process it
    fetch(geoUrl)
      .then((res) => res.json())
      .then((data) => {
        import("topojson-client").then((topojson) => {
          const countries = topojson.feature(data, data.objects.countries).features;
          setGeographies(countries);
        });
      })
      .catch((err) => console.error("Error loading map:", err));
  }, []);

  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 120, center: [0, 20] }}>
      <Geographies geography={geographies}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const countryISO = geo.properties.ISO_A3; // Country code

            // Determine color
            let fillColor = "#DDD"; // Default gray
            if (asiaCountries.includes(countryISO)) fillColor = "blue"; // Asia
            if (nonAsiaCountries.includes(countryISO)) fillColor = "violet"; // Non-Asia

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={fillColor}
                stroke="#FFF"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#0070f3", outline: "none" },
                  pressed: { fill: "#005bb5", outline: "none" },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default GeoChart;
