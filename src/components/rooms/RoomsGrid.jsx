import React from "react";
import { useQuery } from "react-query";

import { RoomCard } from "../rooms";
import { useGetAllRooms } from "api/customer/roomApi";
import { QUERY_KEYS } from "libs/react-query/queryKey";
import { formatPrice } from "utils/helper";
import CustomCircularProgress from "components/common/CustomCircularProgress";

const RoomsGrid = () => {
  const {
    data,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_ROOMS],
    queryFn: useGetAllRooms,
    onError: (error) => {
      console.log("fail room", error);
    },
    refetchOnWindowFocus: false,
  });


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
