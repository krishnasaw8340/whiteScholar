import React from 'react';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Resume from './Component/Resume';
import Home from './Component/Home';
import HelpfulWebsites from './Component/HelpfulWebsites';
import PesonalGrowth from './Component/PesonalGrowth';
import RecentJobs from './Component/RecentJobs';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Box fontFamily={"'Ubuntu', sans-serif;'"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="helpful-websites" element={<HelpfulWebsites />} />
        <Route path="recent-jobs" element={<RecentJobs />} />
        <Route path="personal-growth" element={<PesonalGrowth />} />
      </Routes>
    </Box>
  );
};

export default App;
