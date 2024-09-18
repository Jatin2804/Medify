import Home from "./components/Home/Home";
import About from "./components/Home/AboutSection/AboutSection";
import Footer from "./components/Home/FooterSection/FooterSection"
import Header from "./components/Home/Header/Header"
import Navigation from "./components/Home/Navigation/Navigation"
import DownloadSection from "./components/Home/DownloadSection/DownloadSection"
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Search from "./components/Search/Search"
import Bookings from "./components/Booking/Booking"
import theme from "./Theme"; // Import the custom theme
import { DataProvider } from "./context";

import './App.css';

function App() {
  return (
    <DataProvider>
        <ThemeProvider theme={theme}>
       <CssBaseline /> 
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Navigation/>
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
        </Routes>
    

      <DownloadSection/>
      <Footer/>
      </BrowserRouter>
    </div>
    </ThemeProvider>
    </DataProvider>
  
  );
}

export default App;
