import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from '../components/Layout/Layout';
import { HomeScreen } from '../containers/Home/HomeScreen';
import { NotFound } from '../containers/NotFound.js/NotFound';
import { SearchScreen } from '../containers/Search/SearchScreen';

export const App = () => {
    return (
        <Router>
            <div className="app">
                <Layout>
                <section className="content">
                        <Switch>
                            <Route 
                            exact path="/" 
                            component={ HomeScreen }
                            />
                            <Route 
                            exact path="/search" 
                            component={ SearchScreen }
                            />
                            <Route component={ NotFound }/>
                        </Switch>
                </section>
                </Layout>
            </div>
        </Router>
    );
};
