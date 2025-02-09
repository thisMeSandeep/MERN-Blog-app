import { Link } from "react-router-dom"
const navLinks = [
    { name: "All Posts", href: "/posts" },
    {name:"Web Design" ,href:"/posts?cat=web-design"},
    {name:"Development" ,href:"/posts?cat=development"},
    {name:"Database" ,href:"/posts?cat=database"},
    {name:"Search Engines" ,href:"/posts?cat=searchEngines"},
    {name:"Marketing" ,href:"/posts?cat=marketing"},

]

const MainCategories = () => {
    return (
        <div className="mt-8 hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 lshadow-lg items-center justify-center gap-8">
            {/* links */}
            <div className="flex-1 flex items-center flex-wrap gap-5">
                {
                    navLinks.map((item, index) => (
                        <Link to={item.href} key={index} className={`${index === 0 ? 'bg-blue-800 text-white rounded-full px-4 py-2' : 'text-gray-800  hover:bg-blue-100 rounded-full px-4 py-2'}`}>{item.name}</Link>
                    ))
                }
            </div>

            <span className="text-xl font-medium text-gray-700">|</span>

            {/* Search button */}
            <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
                <input type="text" placeholder="Search a post" className="bg-transparent outline-none px-2 py-1 text-gray-700"/>
            </div>
        </div>
    )
}

export default MainCategories