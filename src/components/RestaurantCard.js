import { useContext } from 'react';
import { CDN_URL } from '../../utils/constants';
import UserContext from '../../utils/userContext';

const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log(resData);
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;

    const {loggedInUser} = useContext(UserContext)

    return (
      <div className="w-[15vmax] bg-gray-300 rounded-2xl mx-2 my-5 ">
      <img className="rounded-xl" src={CDN_URL + cloudinaryImageId} />
        <h3 className='font-bold my-2'>{name}</h3>
        <h4 className='font-semibold '>{cuisines.join(" ,")}</h4>
        <h4 className='font-mono my-2'>{avgRating} ⭐ Rating</h4>
        <h4 className='font-bold'>{costForTwo}</h4>
        <h4 className='font-semibold'>Delivered in {resData.info.sla.deliveryTime} minutes</h4>
        {/* <h4>User : {loggedInUser}</h4> */}
      </div>
    );
  };

  export default RestaurantCard;