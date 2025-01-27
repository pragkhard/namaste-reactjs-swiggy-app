import { useEffect, useState } from "react"
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard"
import resList from "../utils/mockData"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    const [listOfResturants, setlistOfResturants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Higher order component
    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    //whenever state variable update, react triggers a reconcilation cycle(re-renders the component)
    // console.log("Body Rendered")
    // console.log("Body Rendered", listOfResturants)


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        // Resolve corsproxy.io. 
        // " https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&l ng=77.62448069999999&page_type=DESKTOP_WEB_LISTING "

        const json = await data.json();
        console.log("json data", json)

        // Optional Chaining
        setlistOfResturants(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants)
    }

    // use the custom hook here 
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );


    // Conditional rendering 
    // if (listOfResturants.length == 0) {
    //     return <h1>Loading...</h1>
    // }


    // if (listOfResturants.length === 0) {
    //     return <Shimmer />
    // }
    // ==========================================================================================,

    // Local State Variable - Super powerful variable
    // const [listOfResturants, setlistOfResturants] = useState([
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
    return listOfResturants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />

                    <button className='px-4 py-2 m-4 bg-green-100 rounded-lg' onClick={() => {
                        console.log(searchText)

                        const filterResturant = listOfResturants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))

                        // setlistOfResturants(filterResturant)
                        setFilteredRestaurant(filterResturant)


                    }}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center rounded-lg">
                    <button className="filter-btn px-4 py-2 m-4 bg-gray-500"
                        onClick={() => {

                            // Filter logic here 
                            const filterList = resList.filter((res) => res.info.avgRating > 4)
                            console.log(filterList)
                            // setlistOfResturants(filterList)
                            setFilteredRestaurant(filterList)

                        }}>Top Rated Restaurants</button>
                </div>

            </div>
            <div className="res-container flex flex-wrap items-center justify-center">
                {/* how to make dynamic cards  */}
                {/* passing the props like that  */}
                {/* <RestaurantCard resName={resList[0]} />
                <RestaurantCard resName={resList[1]} /> */}

                {/* Now no need to write again and again <RestaurantCard /> */}

                {

                    //not using keys (not acceptable) <<<< index <<<<<<<<<<< unique id

                    // listOfResturants.map((restaurant) => (<RestaurantCard resData={restaurant} key={restaurant?.info?.id} />))

                    // filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))

                    // filteredRestaurant.map((restaurant) => (
                    //     <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>         <RestaurantCard resData={restaurant} />
                    //     </Link>
                    // ))


                    // With Higher order component logic 
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}>
                            {/* If the resturant is promoted then add a promoted label to it */}

                            {
                                restaurant?.info.isOpen
                                    ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                            }

                        </Link>
                    ))

                }
            </div>

        </div>
    )
}

export default Body