import LoadingSpinner from "./LoadingSpinner";
import Restaurant from "./Restaurant";
import {useEffect, useState} from "react";

const Restaurants = (props) => {
 
  return (
      <>
        <h3 className={"mb-3"}>Richmond VA Restaurants</h3>

        {props.restaurants.length > 0 ? (
            props.restaurants.map((restaurant, index) => (
                <Restaurant
                    // key={"R-" + index.toString()}
                            restaurant={restaurant}
                            setModalShow={props.setModalShow}
                            showRestaurant={props.showRestaurant}
                            setRestaurant={props.setRestaurant}
                />
            ))) : 'There are no restaurants to show'
        }
      </>
  )
}

export default Restaurants;