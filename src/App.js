import React from "react";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Resume from "./Component/Resume";
import Notes from "./Component/Notes";
import Home from "./Component/Home";
import HelpfulWebsites from "./Component/HelpfulWebsites";
import RecentJobs from "./Component/RecentJobs";
import { Box } from "@chakra-ui/react";
import Contribute from "./Component/Contribute";
import Auth from "./Component/Auth";

const App = () => {
  return (
    <Box fontFamily={"'Ubuntu', sans-serif;'"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="resume" element={<Resume />} />
        <Route path="helpful-websites" element={<HelpfulWebsites />} />
        <Route path="recent-jobs" element={<RecentJobs />} />
        <Route path="notes" element={<Notes />} />
        <Route exact path="contribute" element={<Contribute />} />
      </Routes>
    </Box>
  );
};

export default App;
