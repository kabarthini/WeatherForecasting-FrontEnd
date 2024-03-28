import React from 'react';
import { useSelector } from 'react-redux';

const SearchHistoryComponent = () => {
  const searchHistory = useSelector((state) => state.searchHistory.history);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>
            {item.query} - {item.weatherData.temperature}°C {/* Example: Display relevant data */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistoryComponent;
