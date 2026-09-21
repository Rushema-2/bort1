import stories from "../assets/stories.json";

import { SlLike, SlDislike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function TopStory() {
  const mainStory = stories[0];
  const otherStories = stories.slice(1);

  return (
    <section className="px-8 py-8">
      <h2 className="text-sm font-medium text-gray-700 mb-5">
        TOP STORY
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
       
        <div>
          <div className="w-full h-300 bg-gray-100 overflow-hidden">
            <img
              src={mainStory.image}
              alt={mainStory.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs font-semibold text-gray-600 mt-4">
            TOP STORY
          </p>

          <h1 className="text-xl font-semibold text-gray-800 mt-2">
            {mainStory.title}
          </h1>
        </div>

    
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {otherStories.map((story) => (
              <article key={story.id}>
                
                <div className="w-full h-105 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-xs font-semibold text-gray-500 mt-2">
                  {story.category}
                </p>

            
                <div className="flex items-center gap-6 mt-3">
                  <div className="flex items-center gap-1">
                    <SlLike />
                    <span>23</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <SlDislike />
                    <span>3</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaRegCommentAlt />
                    <span>1k</span>
                  </div>

                  <MdOutlineFileDownload />
                </div>

                <h3 className="text-sm font-semibold text-gray-800 mt-2">
                  {story.title}
                </h3>

                <span className="inline-block py-3 text-blue-600 cursor-pointer">
                  View More...
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopStory;