import React from "react"
import { connect } from "react-redux"
import { Thumbnail, Glyphicon } from 'react-bootstrap';

import ActivityModal from './ActivityModal';
import { getMonth, getDay } from '../DateFunctions';

const moment = require('moment');


class ActivityCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    };

    openActivityModal = () => {
        this.setState({
            show: true
        });
    };

    createActivityItem = () => {
        let activity = this.props.activity;

        let localImages = new Array(activity.images).filter(image => {
            return image != "";
        }).map(image => {
            return '/media/' + image;
        });
        let instaImages = activity.instagram.split(",").filter(image => {
            return image != "";
        });

        let images = localImages.concat(instaImages);

        let poster = null;
        if (images.length > 0) {
            poster = images[0];
        }

        const date = moment(this.props.activity.date).format('DD/MM/YYYY') + ' - ' + moment(this.props.activity.date_end).format('DD/MM/YYYY');

        return (
            <div key={this.props.activity.id}>
                <div
                    className="activityBigStyle"
                    onClick={this.openActivityModal}
                    title="Klikk på aktiviteten for mer informasjon"
                >
                    <div className="infoItem">
                        <h3>{this.props.activity.activityName}</h3>
                        <div className="big-info-box-wrapper">
                            <div className="big-icon-container">
                                <p><Glyphicon glyph="glyphicon glyphicon-calendar"/></p>
                                <p><Glyphicon glyph="glyphicon glyphicon-time"/></p>
                                <p><Glyphicon glyph="glyphicon glyphicon-map-marker"/></p>
                            </div>
                            <div className="big-info-container">
                                <p className="big-info-container-p">{date}</p>
                                <p className="big-info-container-p">{this.props.activity.time_start} - {this.props.activity.time_end}</p>
                                <p className="big-info-container-p">{this.props.activity.location}</p>
                            </div>
                            <div className="big-about-container">
                                <p>{this.props.activity.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="imageItem"><img src={poster}/></div>
                    <ActivityModal id={this.props.id} activity={this.props.activity} images={images}
                                   show={this.state.show}/>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.createActivityItem()}
            </div>
        );
    }
}

export default ActivityCard;
