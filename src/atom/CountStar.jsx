import React, { useState } from "react";
import axios from "axios";

const CountStar = (props) => {
  const [rating, setRating] = useState(props.rating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (rate) => {
    setRating(rate);
    // 서버로 요청 보내는 코드 수정
    // reviewId를 props로부터 받아와서 요청 URL에 동적으로 적용
    axios
      .put(`/api/v1/reviews/${props.reviewId}`, { point: rate })
      .then((response) => {
        // 요청 성공 시 처리
        console.log("Rating updated successfully", response);
      })
      .catch((error) => {
        // 요청 실패 시 처리
        console.error("Error updating rating", error);
      });
  };

  return (
    <div
      style={{ fontSize: "25pt", color: "orangered" }}
      className="flex items-center"
    >
      {[1, 2, 3, 4, 5].map((star, i) => {
        const color = star <= (hoverRating || rating) ? "★" : "☆";
        return (
          <span
            key={i}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleClick(star)}
          >
            {color}
          </span>
        );
      })}
      &nbsp;<span className="font-bold text-sm text-black">{rating}</span>
    </div>
  );
};
export default CountStar;
