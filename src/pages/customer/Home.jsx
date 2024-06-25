import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import {
  PiCalendarCheckDuotone,
  PiFlowerLotusLight,
  PiForkKnife,
  PiHandshakeLight,
  PiPersonSimpleSwimLight,
  PiWifiHigh,
} from "react-icons/pi";

import { CustomerLayout } from "../../components/layout";
import { ImageSlider } from "../../components";
import { Card } from "components/common";
import { slideImages, homeCard } from "../../constants";
import { Link } from "react-router-dom";
import SlickSlider from "components/common/SlickSlider";

const services = [
  { icon: <PiWifiHigh size={56} />, title: "Free Wifi" },
  { icon: <PiCalendarCheckDuotone size={56} />, title: "Easy Booking" },
  { icon: <PiForkKnife size={56} />, title: "Restaurant" },
  { icon: <PiPersonSimpleSwimLight size={56} />, title: "Swimming Pool" },
  { icon: <PiFlowerLotusLight size={56} />, title: "Beauty & Health" },
  { icon: <PiHandshakeLight size={56} />, title: "Help & Support" },
];

const images = [
  {
    url: "/img/home/home_1.jpg",
  },
  {
    url: "/img/home/home_2.jpg",
  },
  {
    url: "/img/home/home_3.jpg",
  },
  {
    url: "/img/home/home_4.jpg",
  },
  {
    url: "/img/home/home_5.jpg",
  },
  {
    url: "/img/home/home_6.jpg",
  },
  {
    url: "/img/home/home_7.jpg",
  },
  {
    url: "/img/home/home_8.jpg",
  },
];

const BookingRoom = () => {
  return (
    <CustomerLayout>
      <div className="z-10">
        <ImageSlider slideImages={slideImages} />
      </div>

      <main class="flex flex-col z-10 bg-light-1 pt-10 gap-10">
        <div className="max-w-6xl p-4 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="w-full max-w-3xl flex gap-4">
            <Card data={homeCard[0]} isReverse={true} children={<GiNightSleep className="text-6xl text-primary-1" />} />
            <Card data={homeCard[1]} isReverse={false} children={<FaGift className="text-6xl text-primary-1" />} />
          </div>

          {/* About us */}
          <div className="flex justify-center flex-col gap-4">
            <p className="font-semibold text-primary">About us</p>
            <h3 className="max-w-md font-serif text-5xl leading-normal">Find Your Perfect Stay with Us</h3>
            <p>
              Nestled in the serene landscapes of tranquility, far from the hustle and bustle of city life, lies a haven
              of comfort and relaxation. Our booking service is dedicated to finding you the perfect retreat where you
              can unwind and rejuvenate. Escape to a world of serene beauty and luxury, meticulously curated for your
              ultimate comfort.
            </p>
            <Link to='/rooms'>
              <button className="mr-auto p-2 rounded-md bg-primary text-white hover:bg-primary-1">
                Book your room now
              </button>
            </Link>
          </div>
        </div>

        {/* Our services */}
        <section className="py-12 mx-auto text-center">
          <p className="font-semibold text-primary">About our services</p>
          <h2 className="w-full font-serif text-5xl leading-normal mb-6">Explore Our Hotel Services</h2>
          <Link to="/services" className="flex flex-col md:flex-row gap-6 hover:cursor-pointer">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col items-center text-primary transition-colors duration-300">
                <div className="bg-white p-6 rounded-t-full rounded-br-full shadow-md mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <p className="text-lg font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </p>
              </div>
            ))}
          </Link>
        </section>

        {/* Images of us*/}
        {/* <div className="flex flex-col w-full md:flex-row grid-cols-5">
          {images.map((item) => (
            <img className="md:w-1/5 p-2 object-cover" src={item.url} alt="images" />
          ))}
        </div> */}

        <SlickSlider images={images} />
      </main>
    </CustomerLayout>
  );
};

export default BookingRoom;
