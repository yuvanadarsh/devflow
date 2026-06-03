import { FaArrowRight } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { TfiPencil } from "react-icons/tfi";

export default function Card() {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row justify-between items-center border border-text-primary/60 rounded-md p-4 gap-6">
          {/* Left Side: Project Info & Status */}
          <div className="flex flex-row items-center gap-6 min-w-0 flex-1">
            <p className="text-lg font-medium whitespace-nowrap">Project Name</p>

            {/* Description container handles the truncation gracefully */}
            <div className="min-w-0 flex-1">
              <p className="text-text-primary/50 text-sm truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae pariatur similique nemo natus ut iusto aut earum possimus dicta, veniam, saepe maxime error, eos nihil ratione
                omnis magnam sit officiis. Sapiente, magni. Amet eum ratione quis velit tempore iure? Dolor mollitia facere laborum culpa fuga, fugiat quisquam possimus tenetur illum minima, nostrum
                impedit eligendi, distinctio asperiores! At nobis similique obcaecati adipisci tempore nihil accusantium? Consectetur, tempora velit facilis labore aperiam doloremque asperiores optio
                distinctio natus autem reprehenderit, eius quibusdam, culpa alias a. Praesentium amet quod sapiente laboriosam illum, suscipit dolores. Obcaecati eum fuga animi dolorum? Tempora
                explicabo sequi doloribus?
              </p>
            </div>

            {/* Status Badge */}
            <div className="bg-warning px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap text-background">In Progress</div>
          </div>

          {/* Right Side: Action Controls */}
          <div className="flex flex-row items-center gap-4 border-l border-text-primary/60 pl-6 shrink-0">
            <button className="hover:text-primary transition-colors" aria-label="Edit project">
              <TfiPencil className="text-xl" />
            </button>
            <button className="hover:text-red-600 transition-colors" aria-label="Delete project">
              <FiTrash2 className="text-xl text-red-500" />
            </button>
            <button className="flex flex-row items-center gap-2 hover:opacity-80 transition-opacity ml-2">
              <p className="text-sm font-medium whitespace-nowrap">View more</p>
              <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
