import { LOGO_URL } from '../../utils/constants';
import {Link} from "react-router-dom";
import useOnlineStatus from '../../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext)
  // console.log(loggedInUser);

  //Subscribing to the store using a Selector hook
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

    return (
      <div className=" bg-blue-300 flex justify-between items-center p-2 mb-3">
        <div className="logo">
          <img className="w-1/12 rounded-lg" src={LOGO_URL}></img>
        </div>
        <div className="flex justify-between items-center text-xl gap-3 w-6/12">
        <span>Online Status : {onlineStatus ? "✅" : "🔴"}</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/cart" >Cart-({cartItems.length})</Link>
          <Link to="#">{loggedInUser}</Link>
        </div>
      </div>
    );
  };

  export default Header;