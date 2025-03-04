import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
    // console.log("data", data)
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // console.log("clickable")
        // setShowItems(true)

        // toggle feature 
        // setShowItems(!showItems)

        // lifting state up
        setShowIndex()
    };
    return (
        <div>
            {/* Header  */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                {/* ResCategory */}
                {/* controlled component */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length}) </span>
                    <span>⬇️</span>
                </div>
                {/* Accordian body  */}
                {/* <ItemList items={data.itemCards} /> */}
                {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
            </div>

        </div>
    );
};

export default RestaurantCategory;
