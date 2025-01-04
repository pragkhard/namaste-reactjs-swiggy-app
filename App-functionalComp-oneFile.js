import React from 'react';
import ReactDOM from 'react-dom/client';



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}
// ================================================================================================

// 1. Introduce CSS  | 

// Internal Styling CSS

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

// Call this  way 
{/* <div className="res-card" style={styleCard}> */ }

// const RestaurantCard = () => {
//     return (
// Inline CSS 
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg" alt="" />
//             <h3>Meghana Food</h3>
//             <h4>Biryani, North Indian, Asian</h4>
//             <h4>4.4 starts</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//                 <RestaurantCard />
//             </div>

//         </div>
//     )
// }


// =====================================================================================================


// 2. How to make the cards dynamically -  Passing a props to a component 



// const RestaurantCard = (props) => {
//     console.log(props)
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg" alt="" />
//             <h3>{props.resName}</h3>
//             <h4>{props.cusion}</h4>
//             <h4>4.4 starts</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard resName="Meghana Food" cusion="Biryani, North Indian, Asian"/>
//                 <RestaurantCard resName="KFC" cusion="Chicken"/>
//             </div>

//         </div>
//     )
// }

// =====================================================================================================


// 3. Destructuring the props-  



// const RestaurantCard = ({ resName, cusion }) => {
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg" alt="" />
//             <h3>{resName}</h3>
//             <h4>{cusion}</h4>
//             <h4>4.4 starts</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard resName="Meghana Food" cusion="Biryani, North Indian, Asian" />
//                 <RestaurantCard resName="KFC" cusion="Chicken" />
//             </div>

//         </div>
//     )
// }


// OR  - Other way


// const RestaurantCard = (props) => {
//     const { resName, cusion } = props
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/b7a44079-4da0-44f4-95c8-5e5f58b7a082_10892.jpg" alt="" />
//             <h3>{resName}</h3>
//             <h4>{cusion}</h4>
//             <h4>4.4 starts</h4>
//             <h4>38 minutes</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard resName="Meghana Food" cusion="Biryani, North Indian, Asian" />
//                 <RestaurantCard resName="KFC" cusion="Chicken" />
//             </div>

//         </div>
//     )
// }



// =====================================================================================================



// fetch the data - 



const resList = [
    {
        "info": {
            "id": "10576",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
            "locality": "6th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "21K+",
            "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-12-05 04:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "3.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
    {
        "info": {
            "id": "25620",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/7c342687-0ec1-419c-a63f-86dede691776_25620.JPG",
            "locality": "Intermediate Ring Road",
            "areaName": "Ejipura",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Rolls & Wraps"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "31K+",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-12-04 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹2999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
    },
]


// const Body = () => {
//     return (
//         <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//                 {/* how to make dynamic cards  */}
//                 {/* passing the props like that  */}
//                 <RestaurantCard resName={resList[0]} />
//                 <RestaurantCard resName={resList[1]} />
//             </div>

//         </div>
//     )
// }

// const RestaurantCard = (props) => {
//     const { resName, cusion } = props
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resName.info.cloudinaryImageId} alt="" />
//             <h3>{resName.info.name}</h3>
//             <h4>{resName.info.cuisines.join(", ")}</h4>
//             <h4>{resName.info.avgRating}</h4>
//             <h4>{resName.info.costForTwo / 100} FOR TWO</h4>
//             <h4>{resName.info.sla.deliveryTime}</h4>
//         </div>
//     )
// }



// ================================================================================================




// Destructuring the code | Optional Chaining | Loop the data





const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {/* how to make dynamic cards  */}
                {/* passing the props like that  */}
                {/* <RestaurantCard resName={resList[0]} />
                <RestaurantCard resName={resList[1]} /> */}
                {/* Now no need to write again and again <RestaurantCard /> */}
                {

                    //not using keys (not acceptable) <<<< index <<<<<<<<<<< unique id
                    resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resName={restaurant} />)
                }
            </div>

        </div>
    )
}

const RestaurantCard = (props) => {
    const { resName } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resName.info
    const { deliveryTime } = resName.info.sla
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
