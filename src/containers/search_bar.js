import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions";


class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};

        //whenever a callback function has this you need to bind it like this to get the right value with this
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term);
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});

        //we need to go and fetch weather data
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input placeholder="Give a five days forecast in your favorite city"
                    className="form-control"
                    onChange={this.onInputChange}
                />
                <span className="input-group-button">
                  <button type="submit" className="btn btn-secondary">Submit</button>
              </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch );
}

export default connect(null, mapDispatchToProps)(SearchBar);