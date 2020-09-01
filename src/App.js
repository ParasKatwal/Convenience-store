import React from "react";
import { Route, Switch } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import AdminPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";
import CartList from "./pages/CartList";

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
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/productlist" component={ProductList} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/adminpanel" component={AdminPanel} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/cartlist" component={CartList} />
                <Route
                    exact
                    path="/productlist/:slug"
                    component={ProductDetails}
                />
                <Route exact component={Error} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
