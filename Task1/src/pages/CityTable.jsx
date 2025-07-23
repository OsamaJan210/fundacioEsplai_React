import React, { useState, useEffect } from "react";
import cities from "../data/data.json";

const provinces = ["Barcelona", "Tarragona", "Lérida", "Gerona"];

const CityTable = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [minPopulation, setMinPopulation] = useState(20000);
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    let filtered = cities;

    if (selectedProvince) {
      filtered = filtered.filter(city => city.province === selectedProvince);
    }

    filtered = filtered.filter(city => city.population >= minPopulation);
    setFilteredCities(filtered);
  }, [selectedProvince, minPopulation]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">City List</h1>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Province Buttons */}
        <div className="flex gap-3 flex-wrap">
          {provinces.map((prov) => (
            <button
              key={prov}
              onClick={() => setSelectedProvince(prov)}
              className={`px-4 py-2 rounded shadow ${
                selectedProvince === prov
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-400"
              }`}
            >
              {prov}
            </button>
          ))}
          <button
            onClick={() => setSelectedProvince("")}
            className="px-4 py-2 rounded border border-gray-400 bg-white"
          >
            Clear
          </button>
        </div>

        {/* Population Slider */}
        <div className="flex items-center gap-3">
          <label htmlFor="pop" className="font-medium">
            Min Population:
          </label>
          <input
            id="pop"
            type="range"
            min="20000"
            max="150000"
            step="10000"
            value={minPopulation}
            onChange={(e) => setMinPopulation(parseInt(e.target.value))}
          />
          <span className="font-semibold">{minPopulation.toLocaleString()}</span>
        </div>
      </div>

      {/* City Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3">City</th>
              <th className="p-3">Province</th>
              <th className="p-3">Comerca</th>
              <th className="p-3">Population</th>
            </tr>
          </thead>
          <tbody>
            {filteredCities.map((city, index) => (
              <tr
                key={index}
                className="border-t hover:bg-blue-50 transition duration-200"
              >
                <td className="p-3">{city.name}</td>
                <td className="p-3">{city.province}</td>
                <td className="p-3">{city.comarca}</td>
                <td className="p-3">{city.population.toLocaleString()}</td>
              </tr>
            ))}
            {filteredCities.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center p-6 text-gray-500">
                  No cities found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CityTable;
