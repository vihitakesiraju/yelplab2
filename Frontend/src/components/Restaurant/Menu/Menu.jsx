import React, { Component } from "react";
import axios from "axios";
import constants from "../../../Config/routeConstants";
import cookie from "react-cookies";
import MenuItem from "./MenuItem/MenuItem";
import "./Menu.styles.css";
import Checkout from "../../Customer/Checkout/Checkout";
import CustomerReviews from "../../Customer/CustomerReviews/CustomerReviews";
import MapDisplay from "../../Customer/MapDisplay/MapDisplay";
import menuIcon from "../../../Assets/BackgroundImages/menu_icon.jpg";
//import {connect} from 'react-redux'
class Menu extends Component {
  state = {
    res: [],
  };
  componentDidMount() {
    axios
      .get(
        `${constants.BACKEND_URL}/restaurant/${constants.GET_RESTAURANT_MENU}`,
        {
          params: { email: localStorage.getItem("restaurant_email") }
        }
      )
      .then((res) => {
        this.setState({ res: res.data });
        console.log("this.state")
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        window.alert("Failed to load menu");
      });
  }
  render() {
    let desserts = [];
    let salads = [];
    let beverages = [];
    let appetizers = [];
    let mains = [];
    if(this.state.res && this.state.res.length>0){
     this.state.res.map((dish) => {
      // <MenuItem menuItem={dish} />
      console.log(dish.category_id)
      switch (dish.category_id) {
        case "1": {
          desserts.push(<MenuItem menuItem={dish} />);
          break;
        }
        case "2": {
          salads.push(<MenuItem menuItem={dish} />);
          break;
        }
        case "3": {
          beverages.push(<MenuItem menuItem={dish} />);
          break;
        }
        case "4": {
          appetizers.push(<MenuItem menuItem={dish} />);
          break;
        }
        case "5": {
          mains.push(<MenuItem menuItem={dish} />);
          break;
        }
        default: {
        }
      }
    });}
    // console.log(this.props)
    return (
      <div className="menuPage1">
        <h3>{localStorage.getItem("restaurant_name")}</h3>
        <h4>Menu</h4>
        <div className="menuCheckout1">
          <div className="menuListFlex">
            {/* {dishes} */}
            <h3 class="card-title font-weight-bold">Appetizers</h3>
      
            <div className="menuList11">{appetizers}</div>
            <h3 class="card-title font-weight-bold">Salads</h3>
         
            <div className="menuList11">{salads}</div>
            <h3 class="card-title font-weight-bold">Mains</h3>
           
            <div className="menuList11">{mains}</div>
            <h3 class="card-title font-weight-bold">Desserts</h3>
 
            <div className="menuList11">{desserts}</div>
            <h3 class="card-title font-weight-bold">Beverages</h3>
         
            <div className="menuList11">{beverages}</div>
          </div>
          <Checkout props={this.props} />
        </div>
        <MapDisplay props={this.state.res} />
        <CustomerReviews />
      </div>
    );
  }
}

export default Menu;
// const mapStateToProps = (state) => {
//   return {
//       restaurant_id: state.restaurant_id
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Menu);
