import { Box } from '@mui/material'
import SearchSection from "../Home/SearchSection/SearchSection";
import QNASection from "../Home/QNASection/QNASection";
import React from 'react'
import "../Home/styles.css";

const Search = () => {
  return (
    <div>
      <Box sx={{width:"100%" ,backgroundColor: "#2AA7FF", color: "white", height: "100px"}}></Box>
      <Box className="searchSection">
          <SearchSection />
        </Box>
        <Box className="qna-section">
          <QNASection />
        </Box>
    </div>

  )
}

export default Search
