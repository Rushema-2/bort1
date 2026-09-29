
import { useState } from "react";

import stories from "../assets/stories.json";

import { SlLike, SlDislike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function TopStory() {
  const mainStory = stories[0];
  const otherStories = stories.slice(1);


  const [activeComment, setActiveComment] = useState(null);


  const [comment, setComment] = useState("");


  const [comments, setComments] = useState({});

  const handleCommentClick = (storyId) => {
    if (activeComment === storyId) {
      setActiveComment(null);
      setComment("");
    } else {
      setActiveComment(storyId);
      setComment("");
    }
  };


  const handleSubmitComment = (storyId) => {
    if (!comment.trim()) {
      return;
    }

    setComments((prevComments) => ({
      ...prevComments,
      [storyId]: [
        ...(prevComments[storyId] || []),
        comment.trim(),
      ],
    }));

    setComment("");
  };

  return (
    <section className="px-4 py-5">


      <h2 className="text-sm font-medium text-gray-700 mb-4">
        TOP STORY
      </h2>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

       
        <div>

          <div className="w-full h-52 bg-gray-100 overflow-hidden">
            <img
              src={mainStory.image}
              alt={mainStory.title}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs font-semibold text-gray-600 mt-3">
            TOP STORY
          </p>

          <h1 className="text-lg font-semibold text-gray-800 mt-1">
            {mainStory.title}
          </h1>

        </div>


       
        <div className="lg:col-span-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            {otherStories.map((story) => {

             
              const isCommentOpen =
                activeComment === story.id;

              return (
                <article
                  key={story.id}
                  className={
                    isCommentOpen
                      ? "md:col-span-2"
                      : ""
                  }
                >

              

                  <div
                    className={
                      isCommentOpen
                        ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                        : ""
                    }
                  >

                   
                    <div>

                     
                      <div className="w-full h-36 overflow-hidden bg-gray-100">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      </div>


                     
                      <p className="text-xs font-semibold text-gray-500 mt-2">
                        {story.category}
                      </p>


                     
                      <div className="flex items-center gap-3 mt-2 text-sm">

                        
                        <div className="flex items-center gap-1">
                          <SlLike />
                          <span>23</span>
                        </div>


                       
                        <div className="flex items-center gap-1">
                          <SlDislike />
                          <span>3</span>
                        </div>


                       
                        <button
                          type="button"
                          onClick={() =>
                            handleCommentClick(story.id)
                          }
                          className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
                        >
                          <FaRegCommentAlt />

                          <span>
                            {comments[story.id]?.length || "1k"}
                          </span>
                        </button>


                       
                        <button
                          type="button"
                          className="cursor-pointer hover:text-blue-600"
                        >
                          <MdOutlineFileDownload />
                        </button>

                      </div>


                     
                      <h3 className="text-sm font-semibold text-gray-800 mt-1">
                        {story.title}
                      </h3>


                      
                      <span className="inline-block py-2 text-blue-600 cursor-pointer text-sm">
                        View More...
                      </span>

                    </div>


                   
                    {isCommentOpen && (

                      <div className="border border-gray-200 rounded-md p-3 bg-gray-50">

                       
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Comments
                        </h4>


                       
                        <div className="space-y-2 max-h-44 overflow-y-auto">

                          {comments[story.id]?.length > 0 ? (

                            comments[story.id].map(
                              (item, index) => (

                                <div
                                  key={index}
                                  className="bg-white border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700"
                                >
                                  {item}
                                </div>

                              )
                            )

                          ) : (

                            <p className="text-xs text-gray-400">
                              No comments yet.
                            </p>

                          )}

                        </div>


                       
                        <div className="flex gap-2 mt-4">

                          <input
                            type="text"
                            value={comment}
                            onChange={(e) =>
                              setComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleSubmitComment(
                                  story.id
                                );
                              }
                            }}
                            placeholder="Write a comment..."
                            className="min-w-0 flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-600"
                          />


                          <button
                            type="button"
                            onClick={() =>
                              handleSubmitComment(
                                story.id
                              )
                            }
                            className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800"
                          >
                            Send
                          </button>

                        </div>

                      </div>

                    )}

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default TopStory;

