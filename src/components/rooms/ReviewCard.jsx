import { Rating } from "@mui/material";
import React from "react";

const ReviewCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-2 bg-light-1 py-2 px-4 rounded-xl">
      <p className="font-semibold">{data.customerFullName}</p>
      <div className="flex gap-2 mb-2">
        <Rating name="read-only" value={data.star} readOnly />
        <p>|</p>
        <p>{data.reviewDate}</p>
      </div>
      <h3 className="base-semibold">{data.title}</h3>
      <p>{data.content}.</p>
    </div>
  );
};

export default ReviewCard;
