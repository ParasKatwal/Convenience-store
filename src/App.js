import React from "react";
import { Route, Switch } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Error from "./pages/Error";
// COMPONENTS
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

// STYLES
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

function App() {
    return (
        <>
            <TopNav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact component={Error} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
