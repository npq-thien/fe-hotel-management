import { Rating } from "@mui/material";
import React, { useState } from "react";
import ReviewItem from "./ReviewCard";

const reviewPerPage = 3;

const ReviewAndRating = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.max(1, Math.ceil(data.total / reviewPerPage));

  // console.log(data)
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((next) => Math.min(totalPage, next + 1));
  };

  const startIndex = currentPage - 1;
  const selectedReviews = data.items.slice(startIndex * reviewPerPage, (startIndex + 1) * reviewPerPage);

  return (
    <div className="w-3/4 max-w-4xl mx-auto p-4 rounded-lg bg-white border border-primary text-dark-4">
      <div className="flex-between">
        <h3 className="h3-semibold">Reviews and ratings</h3>
        <button className="btn-primary bg-blue-500">Write your review</button>
      </div>
      <div className="flex items-center gap-4 my-4">
        <p className="h3-semibold text-yellow-500">{data.averageStar}</p>
        <Rating name="read-only" value={data.averageStar} readOnly precision={0.5} size="large" />
        <p className="">{data.total} reviews</p>
      </div>
      <div className="flex flex-col gap-4">
        {selectedReviews.map((item, key) => (
          <ReviewItem key={key} data={item} />
        ))}
      </div>

      <div className="flex-between mt-4">
        <button className="btn-primary bg-blue-500" onClick={handlePrevPage}>
          Previous
        </button>
        <p className="base-medium">
          Page {currentPage}/{totalPage}
        </p>
        <button className="btn-primary bg-blue-500" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewAndRating;
