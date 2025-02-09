import { useState } from "react"
import Image from "./image";
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"


const navlinks = [
    { name: "Home", href: "/" },
    { name: "Trending", href: "/trending" },
    { name: "Most Popular", href: "/most-popular" },
    { name: "About", href: "/about" },
]

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* logo */}
            <Link to="/" className="flex items-center gap-4 text-lg font-bold">
                <Image src="logo.png" alt="logo" className={"size-8"} />
                <span >Sandy's Blog </span>
            </Link>


            {/* mobile menu */}
            <div className="md:hidden z-10">
                {/* toggle button */}
                <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
                    {open ? "✖" : "☰"}
                </div>

                {/* mobile menu list */}
                <div className={`w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-8 absolute top-16 ${open ? "-right-0" : "-right-[100%]"} transition-all duration-500 ease-in-out`}>
                    {/* navlinks */}
                    <div className="flex flex-col items-center justify-center gap-8 xl:gap-12">
                        {
                            navlinks.map((item, index) => (
                                <Link to={item.href} key={index}>{item.name}</Link>
                            ))
                        }
                    </div>
                    {/* login button */}
                    <SignedOut>
                        <Link to="/login">
                            <button className="py-2 px-10 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>


            {/* desktop menu */}
            <div className="hidden md:flex gap-8 items-center font-medium xl:gap-12">
                {/* navlinks */}
                <div className="flex gap-8 xl:gap-12">
                    {
                        navlinks.map((item, index) => (
                            <Link to={item.href} key={index}>{item.name}</Link>
                        ))
                    }
                </div>
                {/* login button */}

                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-10 rounded-3xl bg-blue-800 text-white">Login 👋</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Navbar