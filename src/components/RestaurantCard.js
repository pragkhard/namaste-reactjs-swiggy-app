// import the name import 
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo ,deliveryTime} = resData?.info;
    // const { deliveryTime } = resName.info.sla
    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400" 
        // style={{ backgroundColor: "#f0f0f0" }}
        >
            {/* <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" /> */}

            <img className='res-logo rounded-lg' src={CDN_URL + cloudinaryImageId} alt="" />

            <h3 className='font-bold py-4 text-xl'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            {/* <h4>{costForTwo / 100} FOR TWO</h4> */}
            {/* <h4>{deliveryTime}</h4> */}
        </div>
    )
}

export default RestaurantCard