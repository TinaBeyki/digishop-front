import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import './App.css';
import Computers from "./pages/Computers/Computers";
import HeadPhones from "./pages/HeadPhones/HeadPhones";
import LaptopAccessories from "./pages/LaptopAccessories/LaptopAccessories";
import Laptops from "./pages/Laptops/Laptops";
import Mobiles from "./pages/Mobiles/Mobiles";
import PlayTools from "./pages/PlayTools/PlayTools";
import SmartWatches from "./pages/SmartWatches/SmartWatches";
import Tablets from "./pages/Tablets/Tablets";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/computers" exact component={Computers}/>
                    <Route path="/headPhones" exact component={HeadPhones}/>
                    <Route path="/laptopAccessories" exact component={LaptopAccessories}/>
                    <Route path="/laptops" exact component={Laptops}/>
                    <Route path="/mobiles" exact component={Mobiles}/>
                    <Route path="/playTools" exact component={PlayTools}/>
                    <Route path="/smartWatches" exact component={SmartWatches}/>
                    <Route path="/tablets" exact component={Tablets}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
