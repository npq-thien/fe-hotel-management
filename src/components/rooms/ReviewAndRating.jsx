import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Rating, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";

import ReviewItem from "./ReviewCard";
import { useCreateRoomReview } from "api/customer/roomApi";

const reviewPerPage = 3;

const ReviewAndRating = ({ data, roomId }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [reviewContent, setReviewContent] = useState("");
  const [ratingStar, setRatingStar] = useState(0);

  const { mutate: createReview, isLoading: isSubmitting } = useCreateRoomReview();

  const handleWriteReview = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowSnackbar(true);
    } else {
      setShowReviewModal(true);
    }
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const handleSubmitReview = () => {
    console.log(ratingStar, reviewContent);
    const reviewData = {
      roomTypeId: roomId,
      customerId: "customerId",
      content: reviewContent,
      star: ratingStar,
    };

    createReview(reviewData, {
      onSuccess: () => {
        setShowReviewModal(false);
        setReviewContent("");
        setRatingStar(0);
        window.location.reload();
      },
      onError: (error) => {
        setShowReviewModal(false);
        setReviewContent("");
        setRatingStar(0);
        setShowSnackbar(true);
        setErrorMessage(error.response.data.message);
        console.log("Error submitting review:", error.response.data.message);
      },
    });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  // Pagination for review
  const totalPage = Math.max(1, Math.ceil(data.total / reviewPerPage));

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
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        transitionDuration={500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="warning">
          {errorMessage ? errorMessage : "You must login to write a review!"}
        </Alert>
      </Snackbar>
      <Dialog open={showReviewModal} onClose={handleCloseReviewModal}>
        <DialogTitle>Write a review</DialogTitle>
        <DialogContent>
          <Rating
            value={ratingStar}
            onChange={(event, newValue) => setRatingStar(newValue)}
            name="review-star"
            size="large"
          />
          <TextField
            required={false}
            placeholder="Write your review"
            type="text"
            fullWidth
            variant="filled"
            multiline
            rows={4}
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions className="mx-4">
          <button className="btn-secondary text-white" onClick={handleCloseReviewModal}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSubmitReview}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
      <div className="flex-between">
        <h3 className="h3-semibold">Reviews and ratings</h3>
        <button className="btn-primary bg-blue-500" onClick={handleWriteReview}>
          Write your review
        </button>
      </div>
      <div className="flex items-center gap-4 my-4">
        <p className="h3-semibold text-yellow-500">{data.averageStar}</p>
        <Rating name="read-only" value={data.averageStar} readOnly precision={0.1} size="large" />
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
