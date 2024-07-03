import { IoMdPricetags, IoIosBed } from "react-icons/io";
import { FaCheckToSlot, FaHouse, FaUser, FaBellConcierge } from "react-icons/fa6";

export const navbarLinks = [
  {
    route: "/",
    label: "About",
  },
  {
    route: "/rooms",
    label: "Rooms",
  },
  {
    route: "/services",
    label: "Services",
  },
  {
    route: "/promotions",
    label: "Promotion",
  },
];

export const homeCard = [
  {
    img: "/img/home/cozy.jpg",
    title: "Cozy Room",
    description: "Experience ultimate comfort in our cozy rooms, perfect for relaxation and tranquility.",
  },
  {
    img: "/img/home/service.jpg",
    title: "Special offer",
    description: "Enjoy exclusive deals and special offers tailored to enhance your stay.",
  },
];

export const slideImages = [
  {
    id: "1",
    url: "/img/room_suite.jpg",
    title: "Rooms & Suites",
    description:
      "Choose from our diverse selection of beautifully appointed guest rooms and suites, all designed to deliver the perfect blend of comfort and convenience. Relax in spacious layouts, enjoy premium amenities, and unwind in a tranquil setting.",
  },
  {
    id: "2",
    url: "/img/restaurant.jpg",
    title: "Restaurant",
    description:
      "Enjoy a vibrant atmosphere, impeccable service, and a menu that caters to breakfast, lunch, and dinner. Our talented chefs showcase their expertise with innovative dishes prepared using fresh, locally sourced ingredients.",
  },
  {
    id: "3",
    url: "/img/spa.jpg",
    title: "Spa",
    description:
      " Escape the everyday and indulge in a range of pampering treatments at our luxurious spa. Our expert therapists offer massages, facials, and other body treatments to promote relaxation and rejuvenation.",
  },
  {
    id: "4",
    url: "/img/gym.jpg",
    title: "Fitness Center",
    description:
      "Stay active during your stay with access to our state-of-the-art fitness center. Featuring a variety of cardio and weight training equipment, it's the perfect place to maintain your workout routine.",
  },
];

export const aboutUsFooter = [
  {
    url: "#!",
    title: "Who we are",
  },
  {
    url: "#!",
    title: "Career",
  },
  {
    url: "#!",
    title: "Contact",
  },
  {
    url: "#!",
    title: "News and events",
  },
];

export const productsFooter = [
  {
    url: "#!",
    title: "Room & Suite",
  },
  {
    url: "#!",
    title: "Restaurant",
  },
  {
    url: "#!",
    title: "Entertainments",
  },
  {
    url: "#!",
    title: "Booking tickets",
  },
];

export const moreFooter = [
  {
    url: "#!",
    title: "Terms and conditions",
  },
  {
    url: "#!",
    title: "Privacy policy",
  },
  {
    url: "#!",
    title: "Operating regulations",
  },
  {
    url: "#!",
    title: "FAQ",
  },
];

/////////////////////////////////////// FOR ADMIN ///////////////////////////////////////
export const adminNavbarLinks = [
  {
    route: "/admin",
    label: "Dashboard",
    icon: <FaHouse />,
  },
  {
    route: "/admin/bookings",
    label: "Bookings",
    icon: <FaCheckToSlot />,
  },
  {
    route: "/admin/guests",
    label: "Guests",
    icon: <FaUser />,
  },
  {
    route: "/admin/rooms",
    label: "Rooms",
    icon: <IoIosBed />,
  },
  {
    route: "/admin/services",
    label: "Services",
    icon: <FaBellConcierge />,
  },
  {
    route: "/admin/promotions",
    label: "Promotions",
    icon: <IoMdPricetags />,
  },
];
