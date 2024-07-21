import React from "react";

import { RoomCard } from "../rooms";
import { useGetAllRooms } from "api/customer/roomApi";
import { formatPrice } from "utils/helper";
import CustomCircularProgress from "components/common/CustomCircularProgress";

const RoomsGrid = () => {
  const {data} = useGetAllRooms();


  return (
    <>
      {!data ? (
        <div className="flex-center m-5">
          <CustomCircularProgress />
        </div>
      ) : (
        <div className="rooms-container justify-center mx-auto m-5">
          {data?.items.map((item, index) => (
            <RoomCard
              key={index}
              route={item.id}
              name={item.typeName}
              description={item.introduction}
              price={formatPrice(item.price)}
              imgUrl={item.thumbnail}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default RoomsGrid;
