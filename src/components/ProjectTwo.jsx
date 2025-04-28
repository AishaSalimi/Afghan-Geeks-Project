import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
export default function ProjectTwo() {
  return (
    <div className="w-full 2xl:h-screen md:min-h-screen bg-[#363742]">
      <div className="flex flex-col items-center justify-center pt-30 pb-15">
        <p className="text-white text-[40px]">Do not take our word for it.</p>
        <p className="text-4xl font-bold bg-gradient-to-r from-[#03de27] via-[#0fc9a7] to-[#88e5ff] bg-clip-text text-transparent">
          Trust our customers
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 px-20">
        <IoIosArrowBack className="hidden xl:block text-3xl text-amber-50 bg-[#54566b] rounded-sm" />
        <div className="relative w-[350px] h-[450px] bg-[#262730] rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <FaQuoteRight className="text-5xl text-[#54566b] m-4" />
            <img
              className="m-2 h-20 w-auto object-contain rounded-bl-full border border-[#03de27]"
              alt="pic"
              src="/images/p1.jpeg"
            />
          </div>
          <p className=" text-white text-[20px] p-5">
            This project management app is a game-changerl it's like having a
            virtual project manager by your side, keeping everything organized
            and on track. I've never felt more in control of my projects.
          </p>
          <span className="text-white pt-4 px-5">Carmen Walmsley</span>
          <span className="text-[#54566b] text-[13px] px-5">
            Head of Community @ByteBlast Solutions
          </span>
        </div>
        <div className="relative w-[350px] h-[450px] bg-[#262730] rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <FaQuoteRight className="text-5xl text-[#54566b] m-4" />
            <img
              className="m-2 h-20 w-auto object-contain rounded-bl-full border border-[#03de27]"
              alt="pic"
              src="/images/p2.jpeg"
            />
          </div>
          <p className=" text-white text-[20px] p-5">
            With this app, I've finally found the perfect solution for keeping
            my team aligned and productive. From task assignment to progress
            tracking, it covers all the bases and then some.
          </p>
          <span className="text-white pt-4 px-5">Joe Price</span>
          <span className="text-[#54566b] text-[13px] px-5">
            Business Analyst @Joe C. Price
          </span>
        </div>
        <div className="relative w-[350px] h-[450px] bg-[#262730] rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <FaQuoteRight className="text-5xl text-[#54566b] m-4" />
            <img
              className="m-2 h-20 w-auto object-contain rounded-bl-full border border-[#03de27]"
              alt="pic"
              src="/images/p3.jpeg"
            />
          </div>
          <p className=" text-white text-[20px] p-5">
            I've tried countless project management tools, but this app takes
            the cake. It's intuitive, efficient, and packed with features that
            make managing complex projects a breeze.
          </p>
          <span className="text-white pt-4 px-5">Kevin Dandrea</span>
          <span className="text-[#54566b] text-[13px] px-5">
            Project Manager @DataDynamo Solutions
          </span>
        </div>
        <IoIosArrowForward className="hidden xl:block text-3xl text-amber-50 bg-[#54566b] rounded-sm" />
      </div>
      <div className="flex justify-center items-center gap-3 py-7">
        <FaCircle className="text-[#03de27] hidden xl:block" />
        <FaCircle className="text-[#262730] hidden xl:block" />
        <FaCircle className="text-[#262730] hidden xl:block" />
        <FaCircle className="text-[#262730] hidden xl:block" />
      </div>
    </div>
  );
}
