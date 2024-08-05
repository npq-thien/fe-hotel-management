import React from "react";
import { FaLocationDot, FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { aboutUsFooter, moreFooter, productsFooter } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-cream">
      <div className="container py-10 px-10 sm:mx-auto">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
          <div className="">
            {/* Company information */}
            <img className="w-12 h-12 mb-2" src="/logo.png" alt="" />
            <p className="df:text-xl font-semibold font-inter text-primary">The Cozy Nook</p>

            <div className="flex flex-col gap-1 mt-2">
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-primary" />
                <p>Somewhere in Vietnam</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail className="text-primary" />
                <a className="text-primary hover:underline" href="mailto:cozynook@gmail.com">
                  cozynook@gmail.com
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <FaPhone className="text-primary" />
                <a className="text-primary hover:underline" href="tel:0123456789">
                  0123456789
                </a>
              </div>
            </div>
          </div>

          {/* About us */}
          <div className="flex flex-col">
            <p className="h3-bold text-primary">About us</p>
            <ul>
              {aboutUsFooter.map((item, key) => (
                <li key={key}>
                  <a href={item.url} className="hover:text-primary">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <p className="h3-bold text-primary">Products</p>
            <ul>
              {productsFooter.map((item, key) => (
                <li key={key}>
                  <a href={item.url} className="hover:text-primary">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div className="flex flex-col">
            <p className="h3-bold text-primary">More</p>
            <ul>
              {moreFooter.map((item, key) => (
                <li key={key}>
                  <a href={item.url} className="hover:text-primary">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social logos */}
          <div className="lg:col-span-4 md:col-span-2 flex flex-col justify-between md:flex-row">
            <div className="flex flex-col gap-4">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray xl:text-2xltext-white">
                Subscribe us to get an update.
              </h1>

              <div className="flex flex-col justify-between md:flex-row gap-8">
                <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-primary-1 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary"
                    placeholder="Email Address"
                  />

                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex justify-center hover:cursor-pointer"
                  >
                    <img
                      className=""
                      src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                      width="30"
                      height="30"
                      alt="fb"
                    />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex justify-center hover:cursor-pointer"
                  >
                    <FaSquareXTwitter className="hover:cursor-pointer w-[30px] h-[40px]" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex justify-center hover:cursor-pointer"
                  >
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

      <div className="flex items-center justify-center bg-stone-400 text-center py-1">
        <p>&copy; 2024 The Cozy Nook. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
