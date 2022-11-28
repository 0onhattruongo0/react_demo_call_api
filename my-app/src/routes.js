import React from "react";
import HomePage from "./pages/Home/HomePage";
import NotFound from "./pages/NotFound/NotFound";

const routes = [
    {
        path: '/',
        exact: true,
        main : ()=>{
            <HomePage />
        }

    },
    {
        path: '',
        exact: false,
        main: ()=>{
            <NotFound />
        }
    }
]

export default routes