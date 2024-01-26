import React, {lazy, Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurantMenu from './src/components/RestaurantMenu';
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Krishan ",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <div className="app">
    <UserContext.Provider value={{loggedInUser : userName}}>
      <Header />
      </UserContext.Provider>
      <Outlet />
      <Footer />
    </div>
    </Provider>
  );
};

// (Lazy Loading, Chunking,  Code Splitting, Dynamic Importing, Dynamic Bundling, On Demand Loading) => that is used in large production application to optimization

const About = lazy(()=>import("./src/components/About"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);