import { Link } from "react-router-dom"
import Image from "./image"

const FeaturedPost = () => {
    return (
        <div className=" mt-8 flex flex-col items-start lg:flex-row gap-8" >

            {/* first posts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 border bg-white/40 p-4 rounded-3xl shadow-md">
                {/* post image */}
                <Image src="featured1.jpeg" alt="post1" className={"rounded-3xl object-cover w-full h-auto mx-auto"} />
                {/* post details */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-800 font-semibold">01</span>
                    <Link to="/" className="underline underline-offset-2 font-medium text-blue-800">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                {/* Post link */}
                <Link className="text-xl md:text-3xl text-gray-800 font-semibold lg:font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>

            </div>

            {/* other posts */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">

                {/* post 1 */}
                <div className=" flex lg:h-1/3 gap-4 border bg-white/40 p-4 rounded-3xl shadow-md">
                    {/* post image */}
                    <Image src="featured1.jpeg" alt="post1" className={"rounded-3xl object-cover w-1/3 aspect-video mx-auto"} />

                    {/* post details */}
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base">
                            <span className="text-gray-800 font-semibold">01</span>
                            <Link to="/" className="text-sm  underline underline-offset-2 font-medium text-blue-800">Web Design</Link>
                            <span className="text-gray- text-sm">2 days ago</span>
                        </div>
                        {/* Post link */}
                        <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl text-left   text-gray-800 font-medium lg:font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>

                {/* post 2 */}
                <div className=" flex lg:h-1/3 gap-4 border bg-white/40 p-4 rounded-3xl shadow-md">
                    {/* post image */}
                    <Image src="featured1.jpeg" alt="post1" className={"rounded-3xl object-cover w-1/3 aspect-video mx-auto"} />

                    {/* post details */}
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base">
                            <span className="text-gray-800 font-semibold">01</span>
                            <Link to="/" className="text-sm  underline underline-offset-2 font-medium text-blue-800">Web Design</Link>
                            <span className="text-gray- text-sm">2 days ago</span>
                        </div>
                        {/* Post link */}
                        <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl text-left   text-gray-800 font-medium lg:font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>

                {/* post 3 */}
                <div className=" flex lg:h-1/3 gap-4 border bg-white/40 p-4 rounded-3xl shadow-md">
                    {/* post image */}
                    <Image src="featured1.jpeg" alt="post1" className={"rounded-3xl object-cover w-1/3 aspect-video mx-auto"} />

                    {/* post details */}
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base">
                            <span className="text-gray-800 font-semibold">01</span>
                            <Link to="/" className="text-sm  underline underline-offset-2 font-medium text-blue-800">Web Design</Link>
                            <span className="text-gray- text-sm">2 days ago</span>
                        </div>
                        {/* Post link */}
                        <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl text-left   text-gray-800 font-medium lg:font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedPost