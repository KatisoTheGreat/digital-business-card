import React from "react";
import Info from "../src/components/Info";
import About from "../src/components/About";
import Interests from "../src/components/Interests";
import Footer from "../src/components/Footer";

function App() {
    return(
        <div className="main">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App