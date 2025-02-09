import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout