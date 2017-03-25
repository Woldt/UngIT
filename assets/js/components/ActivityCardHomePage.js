import React from "react"
import { connect } from "react-redux"
import {Thumbnail, Glyphicon} from 'react-bootstrap';

import ActivityModal from './ActivityModal';
import {getMonth, getDay} from '../DateFunctions';

const moment = require('moment');

class ActivityCardHomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    };

    openActivityModal = () =>  {
       this.setState({
           show:true
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
        if(images.length > 0){
            poster = images[0];
        } else {
            poster = "/static/images/activityPic.jpeg"
        }

        const date = moment(this.props.activity.date).format('DD/MM/YYYY') + ' - ' + moment(this.props.activity.date_end).format('DD/MM/YYYY');

        const divStyle = {
            backgroundImage: 'url(' + poster + ')',
            width: '25em',
            height: '25em',
            borderRadius: '10px',
        };

        return (
            <div key={this.props.activity.id}>
                <div
                    className="activitySmalStyle"
                    onClick={this.openActivityModal}
                    title="Klikk på aktiviteten for mer informasjon"
                    style={divStyle}
                >
                    <div className="info-box-wrapper">
                        <h3 className="info-header">{this.props.activity.activityName}</h3>
                        <div className="icon-container">
                            <p className="row">
                                <div className="col-md-7"><Glyphicon glyph="glyphicon glyphicon-calendar"/> {date}</div>
                                <div className="col-md-5"><Glyphicon glyph="glyphicon glyphicon-time"/> {this.props.activity.time_start.slice(0, 5)} - {this.props.activity.time_end.slice(0, 5)}</div>
                            </p>
                            <p><Glyphicon glyph="glyphicon glyphicon-map-marker"/> {this.props.activity.location}</p>
                        </div>
                    </div>
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

// connect actually calles the functions so that their purposes are fulfilled
export default ActivityCardHomePage;
