import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, NavRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './navbar/navbar_container';
import SpotsIndexContainer from './spots/spots_index_container';
import SpotsShowContainer from './spot_show/spots_show_container';
import AppFooter from './footer';
import SearchFilterContainer from './search/search_filter_container';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} /> 
        <Route path="/" component={NavBarContainer} />  
      </Switch>
      <Route exact path="/index" component={SearchFilterContainer} /> 
      <Route exact path="/index" component={SpotsIndexContainer}/>
      <ProtectedRoute exact path="/spots/:spotId" component={SpotsShowContainer} />

      <AppFooter />
    </div>
  )
};

export default App;

