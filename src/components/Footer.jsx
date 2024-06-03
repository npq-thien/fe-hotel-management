import React from "react";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { aboutUsFooter, moreFooter, productsFooter } from "../constants";

const Footer = () => {
  return (
    <footer className="font-inter bg-cream">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          <div className="">
            {/* Company information */}
            <img className="w-12 h-12 mb-2" src="./logo.png" alt="" />
            <p className="df:text-xl font-semibold font-inter text-primary-default">The Cozy Nook</p>

            <div className="flex flex-col gap-1 mt-2">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-primary-default" />
                <p>Somewhere in Vietnam</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail className="text-primary-default" />
                <a className="text-primary-default hover:underline" href="mailto:cozynook@gmail.com">
                  cozynook@gmail.com
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-primary-default" />
                <a className="text-primary-default hover:underline" href="tel:0123456789">
                  0123456789
                </a>
              </div>
            </div>
          </div>

          {/* About us */}
          <div className="flex flex-col">
            <p className="h3-bold text-primary-default">About us</p>
            <ul>
              {aboutUsFooter.map((item, key) => (
                <li key={key}>
                  <a href={item.url} className="hover:text-primary-default">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <p className="h3-bold text-primary-default">Products</p>
            <ul>
              {productsFooter.map((item, key) => (
                <li key={key}>
                  <a href={item.url} className="hover:text-primary-default">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className="flex flex-col">
            <p className="h3-bold text-primary-default">More</p>
            <ul>
              {moreFooter.map((item, key) => (
                <li key={key}>
                  <a href={item.url} className="hover:text-primary-default">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social logos */}
          <div class="lg:col-span-4 flex flex-col justify-between md:flex-row">
            <div className="flex flex-col gap-4">
              <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                Subscribe us to get an update.
              </h1>

              <div className="flex flex-col justify-between md:flex-row gap-8">
                <div class="flex flex-col space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>

                <div className="flex gap-4">
                  <a href="https://facebook.com" className="flex justify-center hover:cursor-pointer">
                    <img
                      className=""
                      src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                      width="30"
                      height="30"
                      alt="fb"
                    />
                  </a>
                  <a href="https://x.com" className="flex justify-center hover:cursor-pointer">
                    <FaSquareXTwitter className="hover:cursor-pointer w-[30px] h-[40px]" />
                  </a>
                  <a href="https://instagram.com" className="flex justify-center hover:cursor-pointer">
                    <img
                      className="hover:cursor-pointer"
                      src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                      width="30"
                      height="30"
                      alt="inst"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-400 text-center py-1">&copy; 2024 The Cozy Nook. All rights reserved</div>
    </footer>
  );
};

export default Footer;
