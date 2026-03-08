"use client";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
function Ratings() {
  return (
    <>
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          name="half-rating-read"
          defaultValue={5}
          precision={0.5}
          readOnly
        />
      </Box>
    </>
  );
}

export default Ratings