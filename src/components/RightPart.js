import "./rightPart.css";

import { Route, Routes } from "react-router-dom";
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';

function RightPart() {
  return (
    <div className='rightPart'>
      <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default RightPart;