import { SlLike, SlDislike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function CardStory() {
  const Action = [
    { icon: <SlLike />, text: "23" },
    { icon: <SlDislike />, text: "3" },
    { icon: <FaRegCommentAlt />, text: "1k" },
  ];

  return (
    <div>
      <div className="flex items-center gap-6">
        {Action.map((action, index) => (
          <div key={index} className="flex items-center gap-1">
            {action.icon}
            <span>{action.text}</span>
          </div>
        ))}

        <MdOutlineFileDownload />
      </div>

      <span className="inline-block py-3 text-blue-600 cursor-pointer">
        View More...
      </span>
    </div>
  );
}

export default CardStory;