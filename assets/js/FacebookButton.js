import React, { Component } from 'react';
import {Button} from "react-bootstrap";

class FacebookButton extends Component {
        constructor(props) {
        super(props);

        this.state = {
            connected: "",
            buttonText: ""
        };

        this.handleLogInOut = this.handleLogInOut.bind(this);
        this.checkLoginState = this.checkLoginState.bind(this);
        this.findInfo = this.findInfo.bind(this);
   }


    componentDidMount() {
    window.fbAsyncInit= function() {
        FB.init({
            appId      : '1658650714438155',
            cookie     : true,  // enable cookies to allow the server to access
                            // the session
            fields     : 'id,name,email,picture',
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use version 2.1
        });
    }.bind(this);
    this.checkLoginState();

    }

    handleLogInOut() {
        var that = this;
        if(this.state.connected === "notconnected"){
            FB.login(function(response) {
                that.checkLoginState();
            });
        }
        else{
            FB.logout(function(response) {
                that.checkLoginState();
            });
        }
    }


    findInfo() {
        console.log('Fetching your information.... ');
        FB.api('/me', 'GET', {fields: 'name,id,picture,email'}, function(response) {
            console.log('Thanks for logging in:');
            console.log(response.name);
            console.log(response.id);
            console.log(response.email);
            console.log(response.picture.data.url);

        });
    }

    checkLoginState() {
        FB.getLoginStatus(function(response) {
            console.log(response);
            if (response.status === 'connected') {
                this.setState(() => ({
                    connected: "connected",
                    buttonText: "Log out"
                }));
                this.findInfo();
            } else {
                this.setState(() => ({
                    connected: "notconnected",
                    buttonText: "Log in"
                }));
            }
        }.bind(this));
    }


    render(){
        return (
            <div>
                <Button id="" onClick={this.handleLogInOut}>{this.state.buttonText + " with Facebook"}</Button>
            </div>
        );
    }
}

export default FacebookButton;
