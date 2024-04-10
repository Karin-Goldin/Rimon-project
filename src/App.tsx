import NavBar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import ContactUs from "./scenes/ContactUs";
import Footer from "./scenes/Footer";
import AboutUs from "./scenes/AboutUs";
import TheStaff from "./scenes/TheStaff";
import BackgroundImage from "@/assets/abstract-blue-geometric-shapes-background_24972-1841.avif";
import Hetmed from "./scenes/Hetmed";
import Mango from "./scenes/Mango";
import WhatIsAHedgeFund from "./scenes/whatIsAHedgeFund";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-page-background">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <main
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundAttachment: "fixed",
        }}
      >
        <Home setSelectedPage={setSelectedPage} />
        <AboutUs setSelectedPage={setSelectedPage} />
        <TheStaff setSelectedPage={setSelectedPage} />
        <Hetmed setSelectedPage={setSelectedPage} />
        <Mango setSelectedPage={setSelectedPage} />
        <WhatIsAHedgeFund setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
