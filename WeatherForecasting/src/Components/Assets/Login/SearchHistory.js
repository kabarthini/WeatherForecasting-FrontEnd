import React from 'react';
import { connect } from 'react-redux';

const SearchHistory = ({ searchHistory }) => (
  <div>
    <h2>Search History</h2>
    <ul>
      {searchHistory.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  searchHistory: state.searchHistory,
});

export default connect(mapStateToProps)(SearchHistory);