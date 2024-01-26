import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../../utils/useResMenu";
import Shimmer from "./Shimmer";
// import { CDN_URL } from '../utils/constants';
import { CDN_URL } from "../../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useResMenu(resId);
  // console.log(resData);

  const [showIndex, setShowIndex] = useState(null)

  // const {itemCards} = resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  const data = resData?.data?.cards[2]?.card?.card?.info;
  // console.log(resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  if (resData === null) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {/*Header Of ResMenu */}
      <div className="bg-gray-300 flex justify-between items-center p-4 m-2 w-8/12">
        <div>
          <h1 className="font-bold text-xl">
            {data.name}
          </h1>
          <p className="font-semibold">
            {data.cuisines.join(", ")}
          </p>
        </div>
        <div>
          <span className="font-bold">
            {data.avgRatingString + "⭐"}
          </span>
        </div>
      </div>

      {/* Body of the ResMenu */}

      <div className="p-2 w-8/12">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
