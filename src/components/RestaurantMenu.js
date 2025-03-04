// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// useParam hook  to get the dymanic ids
import { useParams } from "react-router";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    // const params = useParams()
    // console.log(params)

    // Destructuring
    const { resId } = useParams()
    // console.log("Destructuring resId", resId)

    // Accordian hide /show functionality 
    const [showIndex, setShowIndex] = useState(null);

    // create custom hook
    const resInfo = useRestaurantMenu(resId)

    //Props Drilling 
    const dummy = "Dummy Data";


    // useEffect(() => {
    //     fetchMenu()
    // })

    // const fetchMenu = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6161&lng=73.7286&restaurantId=14780&catalog_qa=undefined&submitAction=ENTER")

    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6161&lng=73.7286&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")

    // Here i am adding the resId 
    // using resId - 14780

    //     const data = await fetch(MENU_API + resId)
    //     const json = await data.json()

    //     console.log(json);
    //     setResInfo(json.data)
    // }

    if (resInfo == null) return <Shimmer />

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    // console.log("itemCardsgg", resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.card[4].card.card)


    // console.log(itemCards)
    // console.log("itemCards", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log("categories", categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            {/* <p className="font-bold text-lg">{cuisines?.join(", ")}- {costForTwo}</p> */}
            {/* <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}- {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)} */}

            {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet Cake</li> */}
            {/* </ul> */}

            {/* categories accordions */}
            {/* controlled component */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    // showItems={false}

                    // Implement the lifting state up
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    dummy={dummy}
                />))}
        </div>
    )
}

export default RestaurantMenu;