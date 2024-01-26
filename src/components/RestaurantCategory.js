import React,{ useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  //   console.log(data);
  
//   const [showItems, setShowItmes] = useState(false)

  const handleResCategory = () => {
    setShowIndex(showItems)
    // console.log("click");
  }

  return (
    <div>
      {/* Header of the RestaurantCategory */}
      <div className="flex flex-col justify-center my-2 ">
        <div className="flex justify-between items-center border border-solid border-gray-500  p-4 my-4 cursor-pointer" onClick={handleResCategory} >
          <span className="font-bold text-xl">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Body of the RestaurantCategory or Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
