import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <div className=" bg-black text-white p-4 flex flex-wrap flex-col md:flex-row  justify-center md:justify-around">

                <div className=" flex flex-col items-center md:items-start flex-wrap gap-2 m-2 md:m-10 ">
                    <h1 className=" font-bold text-md md:text-2xl ">FASHION</h1>
                    <div className=" text-sm md:text-md text-center md:text-left ">
                        <p>Complete your style with awesome</p>
                        <p>clothes from us</p>
                    </div>
                    <div className=" flex flex-row flex-wrap space-x-2 mt-2">
                        <div className=" bg-yellow-300 w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <FaFacebookF />  </div>
                        <div className=" bg-yellow-300 w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <FaInstagram />  </div>
                        <div className=" bg-yellow-300 w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <FaTwitter />  </div>
                        <div className=" bg-yellow-300 w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <CiLinkedin />  </div>
                    </div>
                </div >

                <div className=" flex flex-wrap flex-col md:flex-row justify-evenly md:space-x-40">
                    <div className=" m-2  mt-6 md:my-10  flex flex-col items-center md:items-start text-sm md:text-md gap-2 ">
                        <div className=" font-semibold "> Company</div>
                        <div className=" opacity-70 text-center md:text-left flex flex-col flex-wrap gap-2">
                            <p>About</p>
                            <p>Contact us</p>
                            <p>Support</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div className=" m-2  mt-6 md:my-10 flex flex-col items-center md:items-start text-sm md:text-md gap-2">
                        <div className=" font-semibold "> Quick Link</div>
                        <div className=" opacity-70 text-center md:text-left flex flex-col flex-wrap gap-2">
                            <p>Share Location</p>
                            <p>Orders Tracking</p>
                            <p>Size Guide</p>
                            <p>FAQs</p>
                        </div>
                    </div>

                    <div className=" m-2  mt-6 md:my-10  flex flex-col items-center md:items-start text-sm md:text-md gap-2">
                        <div className=" font-semibold "> Legal</div>
                        <div className=" opacity-70 text-center md:text-left flex flex-col flex-wrap gap-2">
                            <p>Terms & conditions </p>
                            <p>Privacy policy</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Footer;
