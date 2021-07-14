import React, { Component } from 'react';

class SearchBar extends Component { 

    // like __init__ only inside this we manipulate state
    constructor(props) {
        // calling parent method
        super(props);

        // self.state update properties as state changes
        this.state = {term:''}
    }

    render () {
        return (
            <div className="search-bar">
                <h1>Sushiba Tube</h1>
                <input 
                // controlled input, its value only changes when the state changes
                value = {this.state.term}
                // this component sets the state and the value is set to the new state
                // when a user types something they only trigger an event and didnt change
                // the input value
                onChange={event => this.setState({term: event.target.value})} />
            </div>
        );
    }
}

export default SearchBar;