import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const MainContainer = () => {
  return (
    <div className="container-main">
      <Navbar />
      <main>
        <Landing />
        <Work />
        <Career />
        <WhatIDo />
      </main>
      <Contact />
    </div>
  );
};

export default MainContainer;
