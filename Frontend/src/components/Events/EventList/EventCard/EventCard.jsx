import React, { Component } from "react";
import "./EventCard.styles.css";
import { withRouter } from "react-router-dom";
import cookie from "react-cookies";
import Axios from "axios";
import routeConstants from "../../../../Config/routeConstants";
import {connect} from 'react-redux'
import ModalImage from 'react-modal-image'
class EventCard extends Component {
  state = {
    redirect: false,
  };

  handleClick = () => {
    // console.log(this.props);
    // localStorage.setItem('event_id', this.props.props.res.event_id)
    if (cookie.load("cookie")) {
      console.log(routeConstants.BACKEND_URL)
      console.log(routeConstants.POST_EVENT_REGISTRATION)
      Axios.post(
        `${routeConstants.BACKEND_URL}/events${routeConstants.POST_EVENT_REGISTRATION}`,
        {
          //email_id: cookie.load("email"),
          //event_id: this.props.props.res.event_id,
          customer_id: this.props.customer_id,
          event_id:this.props.props.res._id
        }
      )
        .then((res) => {
          // this.setState({ resData: [...res.data] })
          // console.log(res)
          window.alert("Registered!");
        })
        .catch((err) => {
          window.alert("Already Registered!");
          console.log(err);
        });
    } else {
      window.alert("Login to Register");
      this.props.props.props.history.push("/login");
      // this.setState({ redirectA: true })
    }
  };
  render() {
    
    const restData = { ...this.props.props.res };
    console.log(restData)
    let Button;
        let imageList
        if (restData.event_images) {
            // console.log(restData.images.length)
            if (restData.event_images.length > 0) {
                imageList = restData.event_images.map((img, i) => {
                    img = img.split('?')[0]
                    return <ModalImage
                        small={img}
                        large={img}
                        alt="Event Image"
                        key={i}
                        hideDownload={true}
                        className="imageDisplayEvent"
                    />;
                })
            }
        }
        if (this.props.user_type === 1) {
            Button = <button className="btn btn-danger col-md-6" onClick={this.handleClick}>Register!</button>

        }
    return (
      <div>
        {/* {JSON.stringify(this.props.props)} */}
        {/* {redirectVar} */}
        <div className="restCard3">

          <h5>{restData.event_name}</h5>
          <p>{restData.restaurant_address}</p>
          <p>{restData.event_description}</p>
          <p>{restData.event_date.split("T")[0]}</p>
          <p>{restData.event_time}</p>
          
          <button
            className="btn btn-danger col-md-3"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

// export default RestaurantCard;
//export default withRouter(EventCard);
const mapStateToProps = (state) => {
  return {
      restaurant_id: state.restaurant_id,
      user_type: state.user_type,
      customer_id: state.customer_id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCard));