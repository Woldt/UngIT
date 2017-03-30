import React from "react"
import {connect} from "react-redux"
import {Thumbnail, Glyphicon} from 'react-bootstrap';

import ActivityModal from './ActivityModal';
import {getMonth, getDay} from '../DateFunctions';

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
        } else {
            poster = "/static/images/activityPic.jpeg"
        }

        let description = '';
        if(this.props.activity.description.length > 160) {
            description = this.props.activity.description.substr(0,160)+ "...";
        } else {
            description = this.props.activity.description;
        }

        const date = moment(this.props.activity.date).format('DD/MM/YYYY') + ' - ' + moment(this.props.activity.date_end).format('DD/MM/YYYY');
        const divStyle = {
            background: 'url(' + poster + ')',
            width: '40em',
            height: '20em;',
            backgroundSize: '40em 20em',
            backgroundRepeat: 'no-repeat',
        };

        return (
            < div
                key={this.props.activity.id}>,
                <div className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title" style={divStyle}/>
                    <div className="mdl-card__supporting-text">
                        <h3 className="big-info-header">{this.props.activity.activityName}</h3>
                        <div className="row">
                            <div className="col-md-6">
                                {/*<div className="row">*/}
                                    <div className="big-icon-container-div"><Glyphicon
                                        glyph="glyphicon glyphicon-calendar"/>{date}</div>
                                    <div className="big-icon-container-div"><Glyphicon
                                        glyph="glyphicon glyphicon-time"/> {this.props.activity.time_start}
                                        - {this.props.activity.time_end}</div>
                                    <div className="big-icon-container-div"><Glyphicon
                                        glyph="glyphicon glyphicon-map-marker"/> {this.props.activity.location}</div>
                                {/*</div>*/}
                            </div>
                            <div className="col-md-6">{description}</div>
                        </div>

                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                           onClick={this.openActivityModal}>
                            Les mer..
                        </a>
                    </div>
                </div>


                < ActivityModal
                    id={this.props.id}
                    activity={this.props.activity}
                    images={images}
                    show={this.state.show}/>
            </div >
        )
            ;
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
