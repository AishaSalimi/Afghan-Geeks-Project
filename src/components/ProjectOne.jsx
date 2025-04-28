import { Yellowtail } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { BiSolidPencil } from "react-icons/bi";
export default function ProjectOne() {
  return (
    <div className="bg-[#bec1d9] w-full h-screen flex items-center justify-center">
      <div className="relative rounded-4xl bg-white w-[500px] h-[650px] p-6">
        <p className="font-extrabold text-2xl">Whisk & Ladle Bristo</p>
        <div className="flex items-center pb-2 pr-1">
          <p>4.5</p>
          <IoIosStar className="text-amber-300 text-3xl" />
          <IoIosStar className="text-amber-300 text-3xl" />
          <IoIosStar className="text-amber-300 text-3xl" />
          <IoIosStar className="text-amber-300 text-3xl" />
          <IoIosStarHalf className="text-amber-300 text-3xl" />
          <p>(231 reviews)</p>
        </div>
        <div className="flex">
          <div className="w-[350px] h-52">
            <img
              className="w-[350px] h-52 rounded-md"
              alt="image1"
              src="/images/rest.jpg"
            />
          </div>
          <div className="flex flex-col gap-4 h-52 ml-3 sm:block hidden">
            <img
              className="h-24 object-contain rounded-md"
              alt="image2"
              src="/images/chef.jpg"
            />
            <img
              className="h-24 object-contain rounded-md"
              alt="image3"
              src="/images/cafe.jpg"
            />
          </div>
        </div>
        <hr className="border-[#bec1d9] my-4"></hr>
        <div className="space-y-2">
          <p className="font-bold flex justify-center py-2">Customer Review</p>
          <div className="bg-slate-200 rounded-3xl h-12 w-full flex items-center justify-center">
            <IoIosStar className="text-amber-300 text-3xl" />
            <IoIosStar className="text-amber-300 text-3xl" />
            <IoIosStar className="text-amber-300 text-3xl" />
            <IoIosStar className="text-amber-300 text-3xl" />
            <IoIosStarHalf className="text-amber-300 text-3xl" />
            <p> 4.5 out of 5</p>
          </div>
          <div className="flex items-center">
            <span className="w-4 text-sm text-gray-700">5</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 w-[70%] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="w-4 text-sm text-gray-700">4</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 w-[85%] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="w-4 text-sm text-gray-700">3</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 w-[60%] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="w-4 text-sm text-gray-700">2</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 w-[65%] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="w-4 text-sm text-gray-700">1</span>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-400 h-3 w-[20%] rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[200px] h-8 bg-white border border-black rounded-full flex items-center justify-center gap-1">
              <BiSolidPencil className="text-black text-1xl" />
              <p>Write Opinion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
