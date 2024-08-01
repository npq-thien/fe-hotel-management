import React from "react";
import { Link, useLocation } from "react-router-dom";

import { CustomerLayout } from "../../components/layout"; // Adjust import as per your file structure
import { ImageSliderRoom, RoomSpec, RoomAmenities, ReviewAndRating } from "../../components/rooms";
import CustomCircularProgress from "components/common/CustomCircularProgress";
import { useGetReviewsByRoomId, useGetRoomDetailById } from "api/customer/roomApi";
import { formatPrice } from "utils/helper";

const RoomDetail = () => {
  const roomId = useLocation().pathname.split("/")[2];

  const { data: room } = useGetRoomDetailById(roomId);
  const { data: reviewData } = useGetReviewsByRoomId(roomId);
  // console.log("yes", ratingData);

  if (!room) {
    return (
      <CustomerLayout>
        <div className="flex-center m-5">
          <CustomCircularProgress />
        </div>
      </CustomerLayout>
    );
  }

  if (room) {
    document.title = room.typeName;
  }

  return (
    <CustomerLayout>
      {/* Banner */}
      <div className="relative">
        <img className="h-80 w-full object-cover block" src="/img/test.jpg" alt="hotel_background" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-x-[15%] bottom-[30%] text-center">
          <div className="flex gap-2 items-center justify-center">
            <p className="text-primary-1 font-serif h3-bold lg:h1-bold">{room.typeName}</p>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb --> */}
      <nav class="flex p-4 pl-6" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link to="/rooms" class="inline-flex items-center text-lg font-medium text-gray-700 hover:text-primary-1">
              Rooms
            </Link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="ms-1 text-lg font-medium text-gray-500 md:ms-2 dark:text-gray-400">{room.typeName}</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Room detail */}
      <div className="flex flex-col gap-4 m-4">
        <ImageSliderRoom imageUrls={room.imageUrls} />

        <div className="flex flex-col gap-2 justify-center mx-auto max-w-4xl">
          <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col ">
            <h2 className="font-serif h3-semibold md:h1-semibold">{room.name}</h2>
            <p className="text-gold md:text-[20px] font-semibold ">{formatPrice(room.price)} VND / NIGHT</p>
          </div>

          <p className="text-dark-2 tracking-wide">{room.description}</p>
        </div>

        <RoomSpec roomData={room} />

        <RoomAmenities amenitiesData={room} />

        <Link to="/booking" className="mx-auto">
          <button className="text-white bg-primary p-4 base-medium rounded-md tracking-wider hover:bg-primary-1">
            Make a reservation
          </button>
        </Link>

        {/* Review and rating */}
        <ReviewAndRating data={reviewData} />
      </div>
    </CustomerLayout>
  );
};

export default RoomDetail;
