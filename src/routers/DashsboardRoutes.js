import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Navbar from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import SearchScreen from '../components/search/SearchScreen';


const DashboardRoutes = () => {
    return ( 

        <>
            <Navbar />

            <div className="container mt-2" >
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen} />
                    <Route exact path="/search" component= {SearchScreen } />

                <Redirect to="/marvel" />
     
                </Switch>
            </div>
        </>
     );
}
 
export default DashboardRoutes;