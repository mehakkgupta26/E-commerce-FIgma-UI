import {
  FaGooglePlay,
  FaApple,
  FaGripLines,
  FaUser,
  FaSearch,
} from "react-icons/fa";

import { FaCartShopping } from "react-icons/fa6";
import { IoMenuOutline, IoHomeSharp } from "react-icons/io5";

const MobilePhone = () => {
  return (
    <div>
      <div className="flex flex-wrap flex-col md:flex-row mx-2 md:mx-5 my-7 md:my-9  justify-center md:justify-evenly">

        {/* text to download mobile */}
        <div className=" m-2 p-4 md:m-1 md:p-5 flex flex-col flex-wrap justify-center items-center gap-2 md:gap-4  ">
          {/* heading */}
          <div className="flex flex-col flex-wrap justify-center items-center font-bold gap-2 md:gap-5 ">
            <h1 className=" text-lg md:text-3xl font-extrabold text-center">
              DOWNLOAD THE APP &
            </h1>
            <h1 className=" text-lg md:text-3xl font-extrabold">
              GET THE VOUCHER !
            </h1>
          </div>
          {/* text */}
          <div className=" flex flex-wrap flex-col justify-center items-center text-[10px] md:text-lg font-semibold opacity-75">
            <p>Get 30% off for forst transaction using</p>
            <p>Rondovision movile app for now.</p>
          </div>
          {/* button */}
          <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center ">
            {/* button 1 */}
            <button className="flex flex-wrap flex-col justify-center items-center bg-black text-white cursor-pointer p-1 text-sm my-1 mx-1">
              <div className=" flex flex-wrap justify-center items-center">
                {/* icon */}
                <div className="p-1">
                  {" "}
                  <FaApple />
                </div>

                {/* text */}
                <div className="mx-1">
                  <p>download on the</p>
                  <p>APP STORE</p>
                </div>
              </div>
            </button>
            {/* button 2 */}
            <button className="flex flex-wrap flex-col justify-center items-center bg-black text-white cursor-pointer p-1 text-sm my-1 mx-1">
              <div className=" flex flex-wrap justify-center items-center">
                {/* icon */}
                <div className="p-1">
                  {" "}
                  <FaGooglePlay />
                </div>

                {/* text */}
                <div className="mx-1">
                  <p>download on the</p>
                  <p>GOOGLE PLAY</p>
                </div>
              </div>
            </button>
          </div>
        </div>


        {/* bubbles and mobile phone */}
        {/* <div className=" flex flex-wrap justify-center md:space-x-9"> */}

          {/* bubbles */}
          {/* <div className=" flex flex-col justify-between">
            <div className=" bg-gray-500 rounded-full w-3 h-3"></div>
            <div className=" bg-amber-200 rounded-full w-7 h-7"></div>
          </div> */}

          {/* mobile phone image */}
          {/* main contaner to align */}
          <div className="flex flex-wrap justify-center m-1">
            {/* grey container */}
            <div className=" p-2 bg-gray-400 flex justify-center w-52 rounded-2xl">
              {/* white container */}
              <div className=" bg-white w-48  rounded-2xl p-3">
                {/* header */}
                <div className="flex flex-wrap m-1 justify-between bg-yellow-50">
                  <div>
                    {/* icon1 */}
                    <FaGripLines />
                  </div>
                  <div>
                    {/* icon2 */}
                    <FaUser />
                  </div>
                </div>

                {/* heading */}
                <div className=" font-semibold text-md">Match Your Style</div>

                {/* search bar */}
                <div>
                  <div className=" bg-slate-100  text-[9px] flex flex-wrap space-x-2 items-center">
                    <FaSearch />
                    <div>search</div>
                  </div>
                </div>

                {/* top rated */}
                <div className="flex flex-wrap justify-evenly text-[9px] my-2">
                  <div className=" bg-yellow-200 rounded-md px-2 py-1">
                    {" "}
                    Trending Now
                  </div>
                  <div className=" bg-slate-200 rounded-md px-2 py-1 text-center">
                    All
                  </div>
                  <div className=" bg-slate-200 rounded-md px-2 py-1 text-center">
                    New
                  </div>
                </div>

                {/* 4 cards */}
                <div className="mt-1 flex flex-col flex-wrap justify-center space-y-2">
                  <div className="flex flex-wrap justify-between m-1 ">
                    <div className=" w-2/5">
                      <img
                        className=" rounded-md"
                        alt="img1 phone"
                        src="https://static.zara.net/photos///2024/V/0/1/p/2712/305/720/2/w/850/2712305720_1_1_1.jpg?ts=1707478054643"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 1
                            </p>
                            <p className="text-[8px] opacity-60">Rs 3200 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-2/5">
                      <img
                        className=" rounded-md"
                        alt="img 2 phone"
                        src="https://static.zara.net/photos///2024/V/0/1/p/1478/124/800/2/w/850/1478124800_1_1_1.jpg?ts=1707334012306"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 2
                            </p>
                            <p className="text-[8px] opacity-60">Rs 1000 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between m-1">
                    <div className=" w-2/5">
                      <img
                        className=" rounded-md"
                        alt="img3 phone"
                        src="https://static.zara.net/photos///2024/V/0/1/p/3920/070/600/2/w/2880/3920070600_1_1_1.jpg?ts=1708007467452"
                      ></img>
                    </div>
                    <div className=" w-2/5">
                      <img
                        className=" rounded-md"
                        alt="img 4 phone"
                        src="https://static.zara.net/photos///2024/V/0/1/p/2586/323/513/2/w/1440/2586323513_1_1_1.jpg?ts=1708019233549"
                      ></img>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="mt-3 mb-0">
                  <div className="  flex flex-wrap justify-around p-1">
                    <div>
                      <IoHomeSharp />
                    </div>
                    <div> <IoMenuOutline /></div>
                    <div> <FaCartShopping /> </div>
                    <div> <FaUser /> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" flex flex-col justify-between ">
            <div className=" bg-amber-200 rounded-full w-7 h-7 "></div>
            <div className=" bg-gray-500 rounded-full w-5 h-5 mb-28"></div>
          </div> */}
          
        {/* </div> */}
      </div>

    </div>
  );
};

export default MobilePhone;
