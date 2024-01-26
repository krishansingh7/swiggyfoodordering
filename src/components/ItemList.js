import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div className=" flex justify-between items-center p-2 m-2 border-gray-300 border-b-2" key={item.card.info.id}>
          <div className="flex flex-col justify-between w-10/12">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="font-semibold">₹ - {item.card.info.price/100}</span>
            <p className="font-medium">{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            <img src={CDN_URL + item.card.info.imageId} className="w-full h- rounded-lg"/>
            <button className="bg-slate-100 text-black font-semibold px-6 py-2 absolute mx-8 my-[-43px] rounded-md hover:bg-slate-200" onClick={()=>handleCart(item)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
