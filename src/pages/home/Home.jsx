import { BsClock } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineMail,
  AiOutlineBars,
} from "react-icons/ai";
import { useState } from "react";
const Home = () => {
  const [showMemu, setShowMemu] = useState(false);

  const toggleMenu = () => {
    setShowMemu(!showMemu);
  };
  return (
    <div className="text-gray-600 font-kris grid md:grid-cols-3 ">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className=" flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100 ">
              <a href="/" className=" hover:text-thrid">
                Kris Restaurant
              </a>
            </h1>
            <div className="px-4 cursor-pointer md:hidden">
              <AiOutlineBars onClick={toggleMenu} />
            </div>
          </div>
          <ul
            className={
              showMemu
                ? "text-sm mt-6  md:block"
                : `text-sm mt-6 hidden md:block`
            }
          >
            <li className="text-gray-700 font-bold py-1">
              <a
                href="#"
                className=" px-4 flex justify-end border-r-4 border-primary"
              >
                <span>Home</span>
                <AiOutlineHome className=" ml-2 mt-1" />
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className=" px-4 flex justify-end border-r-4 border-white"
              >
                <span>About</span>
                <AiOutlineQuestionCircle className="  ml-2 mt-1 " />
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className=" px-4 flex justify-end border-r-4 border-white"
              >
                <span>Contact</span>
                <AiOutlineMail className="  ml-2 mt-1" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main className="px-16 py-16 bg-gray-100 md:col-span-2">
        <div className="text-primary flex justify-center md:justify-end">
          <a
            href="#"
            className="btn border-primary lg:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
          >
            Log in
          </a>
          <a
            className="ml-2 btn  border-primary lg:border-2  hover:bg-primary hover:text-white transition ease-out duration-500"
            href="#"
          >
            Sign up
          </a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">for Kris</h3>
        </header>
        <div className="">
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10 ">
            {/* card go here */}
            <div className="card hover:shadow-lg">
              <img
                src="img/stew.jpg"
                alt="stew"
                className=" w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className=" font-bold">5 Bean chilli stew</span>
                <span className=" block text-gray-500 text-sm">
                  Recipe by Kris
                </span>
              </div>
              <div className="badge">
                <BsClock className=" inline-block mr-1 mb-1" />
                <span>25 mins</span>
              </div>
            </div>
            <div className="card hover:shadow-lg">
              <img
                src="img/noodles.jpg"
                alt="noodles"
                className=" w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className=" font-bold">Veg Noodles</span>
                <span className=" block text-gray-500 text-sm">
                  Recipe by Kris
                </span>
              </div>
              <div className="badge">
                <BsClock className=" inline-block mr-1 mb-1" />
                <span>25 mins</span>
              </div>
            </div>
            <div className="card hover:shadow-lg">
              <img
                src="img/curry.jpg"
                alt="curry"
                className=" w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className=" font-bold">Tofu Curry</span>
                <span className=" block text-gray-500 text-sm">
                  Recipe by Kris
                </span>
              </div>
              <div className="badge">
                <BsClock className=" inline-block mr-1 mb-1" />
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular Recipes
          </h4>
          <div className="mt-8">{/* card go here */}</div>
          <div className=" flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load More
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
