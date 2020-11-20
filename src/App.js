import React from "react";
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import Books from "./Components/Books";
import BookDetails from "./Components/BookDetails";


class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/books' component={Books}/>
                <Route path='/book-details/:id' component={BookDetails}/>
            </HashRouter>
        );
    }
}

export default App;
