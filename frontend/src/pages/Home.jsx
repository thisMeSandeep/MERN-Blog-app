import { Link } from "react-router-dom"
import MainCategories from "../components/MainCategories"
import FeaturedPost from "../components/FeaturedPost"
import PostList from "./PostList"

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">

      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>


      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* title */}
        <div >
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <p className="mt-4 sm:mt-8 text-md md:text-xl text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum.</p>
        </div>
        {/* Animated button */}
        <Link to="/write" className="hidden md:block">
          {/* here comes click me to write component*/}
          <p className="font-bold text-2xl">Write</p>
        </Link>
      </div>

      {/* Categories */}
      <MainCategories />
      {/* FEATURED POST */}
      <FeaturedPost />
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Post</h1>
        <PostList />
      </div>
    </div>
  )
}

export default Home