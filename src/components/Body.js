import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState(resList)

    // Local State Variable - Super powerful variable
    // const [listOfResturants, setListOfResturants] = useState([
    //     {
    //         "info": {
    //             "id": "10576",
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //             "locality": "6th Block",
    //             "areaName": "Koramangala",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "721",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "21K+",
    //             "sla": {
    //                 "deliveryTime": 52,
    //                 "lastMileTravel": 0.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "50-55 mins",
    //                 "lastMileTravelString": "0.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-12-05 04:00:00",
    //                 "opened": true
    //             },
    //             "badges": {

    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {

    //                     },
    //                     "textBased": {

    //                     },
    //                     "textExtendedBadges": {

    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "60% OFF",
    //                 "subHeader": "UPTO ₹120"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "lottie": {

    //                     },
    //                     "video": {

    //                     }
    //                 }
    //             },
    //             "reviewsSummary": {

    //             },
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {

    //             },
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "4.6",
    //                     "ratingCount": "3.1K+"
    //                 },
    //                 "source": "GOOGLE",
    //                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "25620",
    //             "name": "KFC",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/7c342687-0ec1-419c-a63f-86dede691776_25620.JPG",
    //             "locality": "Intermediate Ring Road",
    //             "areaName": "Ejipura",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Burgers",
    //                 "Fast Food",
    //                 "Rolls & Wraps"
    //             ],
    //             "avgRating": 3.3,
    //             "parentId": "547",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "31K+",
    //             "sla": {
    //                 "deliveryTime": 49,
    //                 "lastMileTravel": 0.9,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "45-50 mins",
    //                 "lastMileTravelString": "0.9 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-12-04 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {

    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {

    //                     },
    //                     "textBased": {

    //                     },
    //                     "textExtendedBadges": {

    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "20% OFF",
    //                 "subHeader": "ABOVE ₹2999",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "lottie": {

    //                     },
    //                     "video": {

    //                     }
    //                 }
    //             },
    //             "reviewsSummary": {

    //             },
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {

    //             },
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "--"
    //                 }
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "10576",
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //             "locality": "6th Block",
    //             "areaName": "Koramangala",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "721",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "21K+",
    //             "sla": {
    //                 "deliveryTime": 52,
    //                 "lastMileTravel": 0.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "50-55 mins",
    //                 "lastMileTravelString": "0.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-12-05 04:00:00",
    //                 "opened": true
    //             },
    //             "badges": {

    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {

    //                     },
    //                     "textBased": {

    //                     },
    //                     "textExtendedBadges": {

    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "60% OFF",
    //                 "subHeader": "UPTO ₹120"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "lottie": {

    //                     },
    //                     "video": {

    //                     }
    //                 }
    //             },
    //             "reviewsSummary": {

    //             },
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {

    //             },
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "4.6",
    //                     "ratingCount": "3.1K+"
    //                 },
    //                 "source": "GOOGLE",
    //                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         }
    //     },
    // ])

    // Normal JS Variable 
    // let listOfResturants = null;

    // Normal JS Variable 
    // let listOfResturants = [
    //     {
    //         "info": {
    //             "id": "10576",
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //             "locality": "6th Block",
    //             "areaName": "Koramangala",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "721",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "21K+",
    //             "sla": {
    //                 "deliveryTime": 52,
    //                 "lastMileTravel": 0.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "50-55 mins",
    //                 "lastMileTravelString": "0.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-12-05 04:00:00",
    //                 "opened": true
    //             },
    //             "badges": {

    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {

    //                     },
    //                     "textBased": {

    //                     },
    //                     "textExtendedBadges": {

    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "60% OFF",
    //                 "subHeader": "UPTO ₹120"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "lottie": {

    //                     },
    //                     "video": {

    //                     }
    //                 }
    //             },
    //             "reviewsSummary": {

    //             },
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {

    //             },
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "4.6",
    //                     "ratingCount": "3.1K+"
    //                 },
    //                 "source": "GOOGLE",
    //                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "25620",
    //             "name": "KFC",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/7c342687-0ec1-419c-a63f-86dede691776_25620.JPG",
    //             "locality": "Intermediate Ring Road",
    //             "areaName": "Ejipura",
    //             "costForTwo": "₹400 for two",
    //             "cuisines": [
    //                 "Burgers",
    //                 "Fast Food",
    //                 "Rolls & Wraps"
    //             ],
    //             "avgRating": 3.3,
    //             "parentId": "547",
    //             "avgRatingString": "4.3",
    //             "totalRatingsString": "31K+",
    //             "sla": {
    //                 "deliveryTime": 49,
    //                 "lastMileTravel": 0.9,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "45-50 mins",
    //                 "lastMileTravelString": "0.9 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-12-04 23:00:00",
    //                 "opened": true
    //             },
    //             "badges": {

    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {

    //                     },
    //                     "textBased": {

    //                     },
    //                     "textExtendedBadges": {

    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "20% OFF",
    //                 "subHeader": "ABOVE ₹2999",
    //                 "discountTag": "FLAT DEAL"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "lottie": {

    //                     },
    //                     "video": {

    //                     }
    //                 }
    //             },
    //             "reviewsSummary": {

    //             },
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {

    //             },
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "--"
    //                 }
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "10576",
    //             "name": "Pizza Hut",
    //             "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //             "locality": "6th Block",
    //             "areaName": "Koramangala",
    //             "costForTwo": "₹350 for two",
    //             "cuisines": [
    //                 "Pizzas"
    //             ],
    //             "avgRating": 4.2,
    //             "parentId": "721",
    //             "avgRatingString": "4.2",
    //             "totalRatingsString": "21K+",
    //             "sla": {
    //                 "deliveryTime": 52,
    //                 "lastMileTravel": 0.7,
    //                 "serviceability": "SERVICEABLE",
    //                 "slaString": "50-55 mins",
    //                 "lastMileTravelString": "0.7 km",
    //                 "iconType": "ICON_TYPE_EMPTY"
    //             },
    //             "availability": {
    //                 "nextCloseTime": "2024-12-05 04:00:00",
    //                 "opened": true
    //             },
    //             "badges": {

    //             },
    //             "isOpen": true,
    //             "type": "F",
    //             "badgesV2": {
    //                 "entityBadges": {
    //                     "imageBased": {

    //                     },
    //                     "textBased": {

    //                     },
    //                     "textExtendedBadges": {

    //                     }
    //                 }
    //             },
    //             "aggregatedDiscountInfoV3": {
    //                 "header": "60% OFF",
    //                 "subHeader": "UPTO ₹120"
    //             },
    //             "differentiatedUi": {
    //                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //                 "differentiatedUiMediaDetails": {
    //                     "lottie": {

    //                     },
    //                     "video": {

    //                     }
    //                 }
    //             },
    //             "reviewsSummary": {

    //             },
    //             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //             "restaurantOfferPresentationInfo": {

    //             },
    //             "externalRatings": {
    //                 "aggregatedRating": {
    //                     "rating": "4.6",
    //                     "ratingCount": "3.1K+"
    //                 },
    //                 "source": "GOOGLE",
    //                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    //             },
    //             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //         }
    //     },
    // ]
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        // Filter logic here 
                        const filterList = listOfResturants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setListOfResturants(filterList)
                        console.log(listOfResturants)
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* how to make dynamic cards  */}
                {/* passing the props like that  */}
                {/* <RestaurantCard resName={resList[0]} />
                <RestaurantCard resName={resList[1]} /> */}
                {/* Now no need to write again and again <RestaurantCard /> */}
                {

                    //not using keys (not acceptable) <<<< index <<<<<<<<<<< unique id
                    listOfResturants.map(restaurant => <RestaurantCard key={restaurant.info.id} resName={restaurant} />)
                }
            </div>

        </div>
    )
}

export default Body