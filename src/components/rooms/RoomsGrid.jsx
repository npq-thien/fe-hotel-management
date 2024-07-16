import React from "react";
import { useQuery } from "react-query";
import { Loader } from "lucide-react";

import { RoomCard } from "../rooms";
import { useGetAllRooms } from "api/customer/roomApi";
import { QUERY_KEYS } from "libs/react-query/queryKey";
import { formatPrice } from "utils/helper";

const RoomsGrid = () => {
  const {data, error, isPending: isRoomsLoading} = useQuery({
    queryKey: [QUERY_KEYS.GET_ROOMS],
    queryFn: useGetAllRooms,
    onSuccess: (data) => {
      console.log('success room', data);
    },
    onError: (error) => {
      console.log('fail room', error);
    },
    refetchOnWindowFocus: false,
  })


  return (
    <div className="rooms-container justify-center mx-auto m-5">
      {/* {isRoomsLoading ? (
        <Loader />
      ) : {data && data.items.map((item) => (
        <RoomCard route={item.id} name={item.typeName} description={item.introduction} price={formatPrice(item.price)} imgUrl={item.thumbnail} />
      ))
      }} */}
      {data && data.items.map((item) => (
        <RoomCard route={item.id} name={item.typeName} description={item.introduction} price={formatPrice(item.price)} imgUrl={item.thumbnail} />
      ))
      }
  </div>
  );
};

export default RoomsGrid;
