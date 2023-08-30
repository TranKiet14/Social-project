import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layouts/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const routes = [
    {
        children: [
            // {
            //     element: <PrivateRoutes />,
            //     children: [
                    
            //     ]
            // },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "/",
                element: <LayoutDefault />,
                children: [
                    {
                        path: "/",
                        element: <Home />
                    },
                    {
                        path: "/profile",
                        element: <Profile />
                    }
                ]
            }
        ]
    }
];
