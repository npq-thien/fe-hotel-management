// export const roomInfo = [
//   {
//     route: "/room/single",
//     imageUrl: "/img/single_room.jpg",
//     title: "Single bedroom",
//     description:
//       "A cozy and comfortable space for solo travelers, equipped with all the necessary amenities for a relaxing stay.",
//     price: "300.000",
//   },
//   {
//     route: "/room/double",
//     imageUrl: "/img/double_room.jpg",
//     title: "Double bedroom",
//     description:
//       "Perfect for couples or two guests, this room features a spacious layout with a double bed or twin beds and modern amenities.",
//     price: "500.000",
//   },
//   {
//     route: "/room/deluxe",
//     imageUrl: "/img/deluxe_room.jpg",
//     title: "Deluxe room",
//     description:
//       "Experience the epitome of luxury in our Deluxe Room, which offers an expansive space adorned with premium furnishings.",
//     price: "700.000",
//   },
//   {
//     route: "/room/family",
//     imageUrl: "/img/family_room.jpg",
//     title: "Family room",
//     description:
//       "Our Family Room is perfect for those traveling with children, providing ample space and thoughtful amenities to ensure a pleasant stay for everyone.  Enjoy additional features like a small kitchenette and a cozy seating area, making it an ideal home away from home for your family.",
//     price: "1.000.000",
//   },
//   {
//     route: "/room/suite",
//     imageUrl: "/img/suite.jpg",
//     title: "Suite",
//     description:
//       "Indulge in the ultimate luxury with our spacious Suite, designed for those who appreciate the finer things in life. With panoramic views and sophisticated decor, our Suite offers an unparalleled experience of comfort and style.",
//     price: "2.000.000",
//   },
// ];

export const roomDetailInfo = [
  {
    route: "/room/single",
    name: "Single bedroom",
    thumbnail: "/img/single_room.jpg",
    imageUrls: [
      "/img/single/1.jpg",
      "/img/single/2.jpg",
      "/img/single/3.jpg",
      "/img/single/4.jpg",
      "/img/single/5.jpg",
    ],
    amenities: ["Air-conditioner", "Wifi, TV, Netflix", "Garden view", "Fitness room", "Breakfast"],
    introduction:
      "A cozy and comfortable space for solo travelers, equipped with all the necessary amenities for a relaxing stay.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "20",
    occupancy: "Two adults",
    beds: "One standard bed",
    bathrooms: "Rain shower, hairdryer",
    price: "300.000",
  },
  {
    route: "/room/double",
    name: "Double bedroom",
    thumbnail: "/img/double_room.jpg",
    imageUrls: ["/img/double/1.jpg", "/img/double/2.jpg", "/img/double/3.jpg", "/img/double/4.jpg"],
    amenities: [
      "Air-conditioner",
      "Wifi, TV, Netflix",
      "Sofa, working desk",
      "Fitness room",
      "Breakfast",
      "Double vanities",
    ],
    introduction:
      "Perfect for couples or two guests, this room features a spacious layout with a double bed or twin beds and modern amenities.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "32",
    occupancy: "Up to two adults and two children",
    beds: "Two standard bed",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "500.000",
  },
  {
    route: "/room/deluxe",
    name: "Deluxe room",
    thumbnail: "/img/deluxe_room.jpg",
    imageUrls: [
      "/img/deluxe/1.jpg",
      "/img/deluxe/2.jpg",
      "/img/deluxe/3.jpg",
      "/img/deluxe/4.jpg",
      "/img/deluxe/5.jpg",
    ],
    amenities: [
      "Air-conditioner",
      "Wifi, TV, Netflix",
      "Sofa, working desk",
      "Ocean view",
      "Fitness room",
      "Breakfast",
      "Double vanities",
      "Private pool",
      "Balcony with nice view",
      "Security safe",
    ],
    introduction:
      "Experience the epitome of luxury in our Deluxe Room, which offers an expansive space adorned with premium furnishings.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "32",
    occupancy: "Two adults",
    beds: "One king bed",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "800.000",
  },
  {
    route: "/room/family",
    name: "Family room",
    thumbnail: "/img/family_room.jpg",
    imageUrls: ["/img/family/1.jpg", "/img/family/2.jpg", "/img/family/3.jpg", "/img/family/4.jpg", "/img/family/5.jpg"],
    amenities: [
      "Air-conditioner",
      "Wifi, TV, Netflix",
      "Sofa, working desk",
      "Ocean view",
      "Fitness room",
      "Breakfast",
      "Double vanities",
      "Private pool",
    ],
    introduction:
      "Our Family Room is perfect for those traveling with children, providing ample space and thoughtful amenities to ensure a pleasant stay for everyone.  Enjoy additional features like a small kitchenette and a cozy seating area, making it an ideal home away from home for your family.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "42",
    occupancy: "Two adults",
    beds: "One king bed",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "1.000.000",
  },
  {
    route: "/room/suite",
    name: "Suite",
    thumbnail: "/img/suite.jpg",
    imageUrls: ["/img/suite/1.jpg", "/img/suite/2.jpg", "/img/suite/3.jpg", "/img/suite/4.jpg", "/img/suite/5.jpg"],
    amenities: [
      "Air-conditioner, Heater",
      "Wifi, OLED TV, Netflix",
      "Sofa, working desk",
      "Garden view",
      "Fitness room",
      "Premium breakfast",
      "Private pool",
      "Balcony with nice view",
      "Tea and coffee maker",
    ],
    introduction:
      "Indulge in the ultimate luxury with our spacious Suite, designed for those who appreciate the finer things in life. With panoramic views and sophisticated decor, our Suite offers an unparalleled experience of comfort and style.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "80",
    occupancy: "Up to 6 people",
    beds: "Three king beds",
    bathrooms: "Rain shower, separate marble tub, hairdryer",
    price: "2.000.000",
  },
  {
    route: "/room/penthouse",
    name: "Penthouse",
    thumbnail: "/img/penthouse.jpg",
    imageUrls: [
      "/img/penthouse/1.jpg",
      "/img/penthouse/2.jpg",
      "/img/penthouse/3.jpg",
      "/img/penthouse/4.jpg",
      "/img/penthouse/5.jpg",
    ],
    amenities: [
      "Air-conditioner, Heater",
      "Wifi, 8K OLED TV, Netflix, Spotify",
      "Sofa, working desk",
      "Ocean, garden view",
      "Fitness room",
      "Premium breakfast",
      "Private pool",
      "Balcony with nice view",
      "Tea and coffee maker",
      "Security safe",
      "Soundproof room",
    ],
    introduction:
      "Experience unrivaled luxury in our Penthouse, featuring breathtaking views, exquisite decor, and exceptional amenities for the ultimate in comfort and elegance. Enjoy exclusive privacy and top-tier service in our Penthouse, designed to provide a sophisticated retreat for the discerning traveler.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat consequuntur velit ducimus reiciendis sint.",
    size: "120",
    occupancy: "Up to 10 people",
    beds: "Four king beds",
    bathrooms: "Rain shower, separate marble tub, pink hairdryer, music player",
    price: "5.000.000",
  },
];
