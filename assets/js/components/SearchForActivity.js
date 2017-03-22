import React from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom';
import { FormGroup, FormControl } from 'react-bootstrap';


class SearchForActivity extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            searchText: '',
		};
	};

	handleChange = event => {
        this.setState ({
            searchText: event.target.value
        })
        const searchText = event.target.value;
		this.props.onFilterChange(searchText);
	};

//value={this.props.value}
	render () {
		return (
                <FormControl
                    type="text"
                    placeholder="Søk på aktivitet eller arrangør..."
                    onChange={this.handleChange}
                    value={this.props.activeFilters}
                />

		);
	}
}

SearchForActivity.propTypes = {
	onFilterChange: React.PropTypes.func.isRequired,
	activeFilters: React.PropTypes.string.isRequired,
};

export default SearchForActivity;
