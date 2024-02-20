import MobilePhone from "./MobilePhone";
import { useState } from "react";

const Home = () => {
  const [emailBar, setemailBar] = useState("");

  return (
    <div className="mt-2">
      {/* grey container */}
      <div className=" mx:3 flex justify-center">
        <div
          className=" p-3 rounded-md lg:rounded-3xl w-4/5  bg-[#E8E8E8] 
    flex flex-wrap flex-col-reverse justify-center items-center md:flex-row md:space-x-3 md:justify-evenly "
        >
          <div className="flex flex-col flex-wrap mt-5 items-center md:items-start gap-1 md:text-2xl lg:text-4xl md:gap-2 lg:gap-4 ">
            <p className="bg-white text-center font-bold md:text-left w-[100px] lg:w-[200px]">
              LET'S{" "}
            </p>
            <p className="font-bold ">EXPLORE</p>
            <p className="bg-yellow-300 text-center font-bold md:text-left w-[100px] lg:w-[200px]">
              {" "}
              UNIQUE{" "}
            </p>
            <p className="font-bold ">CLOTHES.</p>
            <div className="flex flex-col items-center">
              <p className="text-[10px] md:text-md lg:text-xl text-center mt-3 md:mt-5  ">
                {" "}
                Live for influential and innovative fashion
              </p>
              <button className="bg-black rounded-md text-white w-6/12 p-2 text-[12px] cursor-pointer my-3 md:mt-5 lg:mt-9">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="h-30 md:h-50 lg:h-[204px] w-60 md:w-92 lg:w-[380px]"
              src="https://www.shutterstock.com/image-photo/ethnic-small-business-owner-smiling-600nw-2310823513.jpg"
              alt="model 3"
            ></img>
          </div>
        </div>
      </div>

      {/* yellow craousal */}
      <div className="w-full bg-yellow-300 p-2 md:p-4 my-2 md:my-6 flex flex-wrap justify-evenly items-center " > 
      <div>
        <img className=" w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo1" src=" https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" />
      </div>
      <div>
        <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12"alt="logo2" src="https://1000logos.net/wp-content/uploads/2017/08/Obey-Logo.png" />
      </div>
      <div>
        <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo3" src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png" />
      </div>
      <div>
        <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo4" src="https://1000logos.net/wp-content/uploads/2021/05/Lacoste-logo.png" />
      </div>
      <div>
        <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png" />
      </div>
      <div>
        <img className="w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14" alt="logo6" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" />
      </div>
      </div>

      {/* new arrivals */}
      <div className="mx-2 my-1 mt-6  ">
        <h2 className="mx-3 font-bold text-xl md:text-2xl lg:text-3xl text-center my-3">
          NEW ARRIVALS
        </h2>
      </div>

      {/* list of arrivals */}
      <div className="mx-2 mt-3 flex flex-wrap justify-evenly items-center ">
        <div className="flex flex-wrap justify-center md:justify-evenly items-center m-3">
          <div className="my-2 mx-1 md:mx-3">
            <div>
              <img
                className="w-48 md:w-56 lg:w-64 h-45 md:h-60 lg:h-72 rounded-lg"
                src="https://static.zara.net/photos///2024/V/0/1/p/4174/323/959/2/w/850/4174323959_1_1_1.jpg?ts=1707938923233"
                alt="grey dress"
              />
            </div>
            <div className="flex flex-wrap space-x-3 justify-between">
              <div className="items-center ">
                <h4 className="text-center">Hoodies & Sweatshirts</h4>
                <p className="text-sm opacity-60">Explore now!</p>
              </div>
              <div>
                <p>→</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-1 md:mx-3">
            <div>
              <img
                className="w-48 md:w-56 lg:w-64 h-45 md:h-60 lg:h-72 rounded-lg"
                src="https://static.zara.net/photos///2024/V/0/1/p/5070/940/081/14/w/480/5070940081_1_1_1.jpg?ts=1702634316815"
                alt="model1"
              />
            </div>
            <div className="flex flex-wrap space-x-3 justify-between">
              <div className="items-center ">
                <h4 className="text-center">Coats & Parkas</h4>
                <p className="text-sm opacity-60">Explore now!</p>
              </div>
              <div>
                <p>→</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-1 md:mx-3">
            <div>
              <img
                className="w-48 md:w-56 lg:w-64 h-45 md:h-60 lg:h-72 rounded-lg"
                alt=" model 2"
                src="https://static.zara.net/photos///2024/V/0/1/p/4174/007/800/2/w/850/4174007800_1_1_1.jpg?ts=1707914600996"
              />
            </div>
            <div className="flex flex-wrap space-x-3 justify-between">
              <div className="items-center ">
                <h4 className="text-center">Tees & T-shirt</h4>
                <p className="text-sm opacity-60">Explore now!</p>
              </div>
              <div>
                <p>→</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* yellow container */}
      <div className=" my-2 bg-yellow-300 flex flex-wrap flex-col justify-center items-center md:flex-row md:space-x-2 md:justify-evenly  ">
        <div className=" w-6/12  md:w-2/5 my-2 ">
          <img
            className=" rounded-lg "
            alt="pay day sale"
            src="https://static.zara.net/photos///2024/V/0/1/p/5070/150/251/2/w/2880/5070150251_9_1_1.jpg?ts=1705917715196"
          ></img>
        </div>
        <div className="flex flex-col flex-wrap mt-3 items-center md:items-start gap-1 md:text-2xl lg:text-3xl md:gap-2 ">
          <p className="bg-white text-center font-bold md:text-left w-[100px] lg:w-[220px] ">
            PAYDAY
          </p>
          <p className="font-bold ">SALE NOW</p>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[10px] md:text-md lg:text-lg text-center mt-1 md:mt-2 lg:mt-3 ">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className=" font-bold text-[10px] md:text-md  lg:text-lg text-center mt-1 lg:mt-2">
              1 June - 10 June 2021
            </p>
            <p className="text-[10px] md:text-md lg:text-lg text-center">
              *Terms & Conditions apply
            </p>
            <button className="bg-black rounded-md text-white w-6/12 md:w-3/12 p-2 text-[12px] cursor-pointer my-3 md:mt-5 lg:mt-9">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Youngs Favourite */}
      <div className="mx-2 my-1 mt-9  ">
        <h2 className="mx-3 font-bold text-xl md:text-2xl lg:text-3xl text-center my-3">
          Young's Favourite
        </h2>
      </div>

      {/* list of Youngs favourite */}
      <div className="mx-2 mt-3 flex flex-wrap justify-evenly items-center ">
        <div className="flex flex-wrap justify-center md:justify-evenly items-center m-3">
          <div className="my-2 mx-1 md:mx-3">
            <div>
              <img
                className="w-48 md:w-72 lg:w-96 h-45 md:h-52 lg:h-72 rounded-lg"
                src="https://aesthetic-clothing.com/cdn/shop/products/aesthetic-clothing-womens-rainbow-striped-shirt-770_2048x2048.jpg?v=1635413845"
                alt="Trending on instagram"
              />
            </div>
            <div className="flex flex-wrap space-x-3 justify-between">
              <div className="items-center ">
                <h4 className="text-center">Trending on instagram</h4>
                <p className="text-sm opacity-60">Explore now!</p>
              </div>
              <div>
                <p>→</p>
              </div>
            </div>
          </div>
          <div className="my-2 mx-1 md:mx-3">
            <div>
              <img
                className="w-48 md:w-72 lg:w-96 h-45 md:h-52 lg:h-72 rounded-lg"
                src="https://i.pinimg.com/564x/b5/b6/bc/b5b6bcb9163eb8c8fbfa6dbf1297f036.jpg "
                alt="under 40"
              />
            </div>
            <div className="flex flex-wrap space-x-3 justify-between">
              <div className="items-center ">
                <h4 className="text-center">All under $40</h4>
                <p className="text-sm opacity-60">Explore now!</p>
              </div>
              <div>
                <p>→</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* download the app text and mobile */}
      <MobilePhone />

      {/* last search bar */}
      <div className=" bg-amber-300 flex flex-wrap flex-col justify-center items-center p-7 text-white text-center ">
        <div className=" font-bold text-center text-xl md:text-2xl mb-2">
          <h1> JOIN SHOPPING COMMUNITY TO </h1>
          <h1>GET MONTHLY PROMO</h1>
        </div>

        <p className=" text-sm md:text-md my-2">
          Type your email below and be young wild generation
        </p>

        <div className="flex flex-wrap justify-center items-center mt-1">
          {/* <input
            className=" p-1 md:p-2 my-1 md:my-2 w-64 rounded-md text-sm"
            type="text"
            id="emailbar"
            placeholder="Add Your email here"
            value={emailBar}
            onChange={(event) => {
              setemailBar(event.target.value);
            }}
          /> */}
          <div className="p-1 md:p-2 my-1 md:my-2 w-64 rounded-md text-sm bg-white text-gray-600 text-left ">Add Your email here</div>
          <button className=" text-white bg-black rounded-sm md:py-[1px] px-2 text-sm ml-[-70px]">
            {" "}
            SEND{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
