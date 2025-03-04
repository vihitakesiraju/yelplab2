import React, { Component } from 'react';
import './EventCard.styles.css'
import { Redirect, withRouter } from "react-router-dom";
import cookie from 'react-cookies';
import Axios from 'axios'
import routeConstants from '../../../../Config/routeConstants'

class RegistrationCardCustomer extends Component {
    state = {
        redirect: false
    }
    render() {
        // let redirectVar;
        // if (this.state.redirectA) {
        //     redirectVar = <Redirect to='/login' />
        // }
        // else if (this.state.redirectB) {
        //     redirectVar = <Redirect to='/customer/event' />

        // }

        const restData = { ...this.props.props.res, ...this.props.props.res.event_id }
        let renderVar
        if (restData && restData.event_date) {
            renderVar = <div className="restCard3">
                <div className="eventImage">
                    <img className="img-thumbnail" alt="eventImage" style={{ "marginBottom": '15px' }} src={restData.image_url} width='200px' height='150px' />
                    <h4>{restData.event_name}</h4>
                </div>
                <h5>{restData.restaurant_name}</h5>
                <p>{restData.restaurant_address}</p>
                <p>{restData.event_description}</p>
                <p>{restData.event_date.split('T')[0]}</p>
                <p>{restData.event_time}</p>
                <p>{restData.event_hashtags}</p>
                <p>Registered Time: {restData.registration_time}</p>
                <p>Registered Date: {restData.registration_date.split('T')[0]}</p>
            </div>
        }
        return (<div>
            {/* {JSON.stringify(this.props.props)} */}
            {/* {redirectVar} */}
            {renderVar}
        </div>);
    }
}

// export default RestaurantCard;
export default withRouter(RegistrationCardCustomer);
