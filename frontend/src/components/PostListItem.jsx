import { Link } from "react-router-dom"
import Image from "./image"

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* image */}
            <div className="hidden md:block xl:w-1/3">
                <Image src="postImg.jpeg" w={800} alt="post" className={"rounded-2xl object-cover"} />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quis.
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800">John doe</Link>
                    <span>on</span>
                    <Link className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita est qui necessitatibus natus obcaecati inventore nihil voluptates, sint architecto aliquam.</p>
                <Link className="underline text-blue-800 text-sm ">Read More</Link>
            </div>


        </div>
    )
}

export default PostListItem