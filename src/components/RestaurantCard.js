// import the name import 
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo ,deliveryTime} = resData?.info;
    // const { deliveryTime } = resName.info.sla
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* <img className='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" /> */}

            <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt="" />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            {/* <h4>{deliveryTime}</h4> */}
        </div>
    )
}

export default RestaurantCard