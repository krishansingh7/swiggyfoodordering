import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
// import resObj from '../utils/mockData'
import { API_URL } from '../../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus';

const Body = () => {

  const onlineStatus = useOnlineStatus()

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(()=>{
        fetchAPI();
    },[]);

   const fetchAPI = async () => {
     const data = await fetch(API_URL);
     const response = await data.json();
     // console.log(response);
     const data1 =
       response?.data?.success?.cards[1]?.gridWidget?.gridElements
         ?.infoWithStyle?.restaurants;
     // console.log(data1);
     setListOfRestaurant(data1);
     setfilteredRestaurant(data1);
   };

    //conditional rendering
    // if(listOfRestaurants.length===0){
    //   return <Shimmer/>
    // };

    if(onlineStatus === false){
      return <h1>u r offline</h1>
    }
    
    return listOfRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="w-100 ">
        <div className=" flex justify-evenly items-center my-3 h-12">
          <div className="">
            <button
              className="py-1 px-2 border border-solid border-black rounded-lg font-semibold"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (value) => value.info.avgRating > 4.2
                );
                // console.log(filteredList);
                // setListOfRestaurant(filteredList);
                setfilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="flex justify-between items-center">
            <input
            className='border border-solid border-black w-80 py-2 px-2 rounded-lg'
              type="text"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              className="py-2 px-6 bg-blue-200 rounded-lg mx-2 font-semibold hover:bg-blue-300"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                // console.log(filtered);
                setfilteredRestaurant(filteredRestaurants)
              }}
            >
              Search
            </button>
          </div>
          {/* <div className='login'>
            <button>Hi</button>
          </div> */}
        </div>

        <div className= "flex justify-center flex-wrap">
          {filteredRestaurants.map((restuarant) => {
            return (
              <Link key={restuarant.info.id} to={'/restaurant/'+restuarant.info.id}><RestaurantCard  resData={restuarant} /></Link>
            );
          })}
        </div>
      </div>
    );
  };

export default Body;