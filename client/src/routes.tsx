import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";




 

 export default function Routes(){
    return useRoutes([
        {
            path: "*",
            element: <PageNotFound />

        },
        {
            path: "/",
            element: <Home />
        }
    ])
 }