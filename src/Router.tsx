import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./screen/Detail";
import Main from "./screen/Main";
import NotFound from "./screen/NotFound";



export const router = createBrowserRouter([
    {
        path :"/",
        element : <App />,
        children : [
            {
                path : "",
                element : <Main />,
            },
            {
                path : "/character/:id",
                element : <Detail />
            },
        ],
        errorElement :<NotFound />
    },
]);

