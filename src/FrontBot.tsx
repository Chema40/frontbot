import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"

export const FrontBot = () => {
    return (
        <RouterProvider router={router}/>
    )
}