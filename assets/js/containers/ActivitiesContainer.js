import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux";

import { fetchAllActivities, fetchFacebookEventData } from '../actions/activitiesActions';
import ActivityCardHomePage from '../components/ActivityCardHomePage';
import configureStore from "../configureStore";

import '../../styles/activityBox.css';

const store = configureStore();

class ActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities().then(() => {
            console.log(this.props);
            this.props.fetchFacebookEventData(this.props.activities);
        });
    }

    createActivityCardComponent = () => {
        return this.props.activities.map(activity => {
            return (
                <ActivityCardHomePage
                    key={activity.id + activity.fields.activityName}
                    id={activity.pk}
                    activity={activity.fields}
                />
            )
        });
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.activities.length != nextProps.activities.length) {
            return true;
        }
        return false;
    }

    render() {
        const styles = {
            activitiesStyle: {
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-around",
                width: '100%',
            }
        };

        return (
            <div style={styles.activitiesStyle}>
                {this.createActivityCardComponent()}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        activities: state.activity.activityList
            .sort((a, b) => new Date(a.fields.date) > new Date(b.fields.date)) // Sort descending based on date
            .slice(0, 4).reverse() // Only get five first
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchActivities: () => dispatch(fetchAllActivities()),
        fetchFacebookEventData: (activities) => dispatch(fetchFacebookEventData(activities)),
    }
};


// Fetch initial data for state
// store.dispatch(fetchAllActivities());

ActivitiesContainer = connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);

ReactDOM.render(
    <Provider store={store}>
        <ActivitiesContainer />
    </Provider>, document.getElementById('activities')
);
