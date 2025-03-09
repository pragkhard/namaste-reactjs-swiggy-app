import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
//Routing configuration
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


// Chunking  Or
// Code Splitting Or
// Dynamic Bundling  Or
// lazy Loading  Or
// on demand loading  Or
// dynamix imoprt


const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"));


const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication

    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Akshay Saini",
        };
        // setuserInfo(userInfo)
        setUserName(data.name)
    }, []);


    return (
        // Default value - Pragati
        // <UserContext.Provider value={{ loggedInUser: userName }}>
        //     {/* Akshay Saini */}
        //     <div className="app">
        //         {/* <UserContext.Provider value={{ loggedInUser: "Shubhi" }}> */}
        //         {/* Shubhi */}
        //         <Header />
        //         {/* </UserContext.Provider> */}
        //         <Outlet />
        //     </div>
        // </UserContext.Provider>
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                // element: <About />
                element: <Suspense fallback={<h1>Loading....</h1>}>
                    <About />
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                // element: <Grocery />,
                element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)
