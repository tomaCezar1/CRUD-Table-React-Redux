import React from "react";
import './App.css';
import {connect} from "react-redux";
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

                <p onClick={this.props.onIncrementCounter}>
                    {this.props.counter}</p>
            </HashRouter>
        );
    }
}

//display state on screen
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

//functions
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 10}),
        onSubtract: () => dispatch({type: 'SUBTRACT', val: 15}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'Delete_RESULT'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
