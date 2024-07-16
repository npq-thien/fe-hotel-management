export const formatPrice = (price) => {
  if (typeof price !== "number") {
    return null; // Handle the case where the input is not a number
  }

  // Convert the number to a string
  let priceStr = price.toString();

  // Use a regular expression to add dots as thousand separators
  return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
