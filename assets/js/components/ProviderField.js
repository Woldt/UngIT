import React, { Component } from 'react';

import { getUserProviders } from '../APIFunctions';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

const styles = {
    customWidth: {
        width: 788,
    },
};

class ProviderField extends Component {

    constructor(props) {
        super(props);

        let selectedProvider = $('#provider').val();
        let color = {};
        if (selectedProvider != "") {
            color = {color: '#3F51B5'};
        }

        this.state = {
            value: selectedProvider,
            personal: "Meg selv",
            registered: [],
            unregistered: ["En aktør jeg ikke representerer", "En annen aktør jeg ikke representerer"],

            open: false,
            color: color
        }

    }

    handleChange = (event, index, value) => {
        $('#provider').val(value);
        this.setState({value, color: {color: '#3F51B5'}});
    };

    render() {

        let items1 = this.state.registered.map((item) => {

            const json = JSON.parse(item.fields.aktordatabase);

           return (
               <MenuItem key={item} primaryText={json.Navn} value={item.pk}/>
           )
        });
        let items2 = this.state.unregistered.map((item) => {
            return (
                <MenuItem key={item} primaryText={item} value={item}/>
            )
        });

        return (
            <SelectField
                floatingLabelText="Velg Arrangør"
                floatingLabelStyle={this.state.color}
                selectedMenuItemStyle={{color: '#3F51B5'}}
                value={this.state.value}
                onChange={this.handleChange}
                autoWidth={false}
                style={styles.customWidth}
            >
                <MenuItem primaryText={this.state.personal} value={this.state.personal}/>
                <Subheader>Mine aktører</Subheader>
                {items1}
                <Subheader>Andre aktører</Subheader>
                {items2}
            </SelectField>
        )
    }

    componentDidMount() {
        getUserProviders(providers => {
            this.setState({registered: providers})
        })
    }

}

export default ProviderField;
