import React, { createContext, useState, useContext } from 'react';

// Create the Context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
const [searchResult, setSearchResult] = useState([]);
const [bookings, setBookings] = useState([]);


  return (
    <DataContext.Provider value={{searchResult, setSearchResult,bookings, setBookings}}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the ExpenseContext
export const useData = () => useContext(DataContext);