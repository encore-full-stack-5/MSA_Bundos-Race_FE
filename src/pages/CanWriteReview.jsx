import axios from "axios";
import { useEffect, useState } from "react";

const CanWriteReview = () => {
  const [reviewInfo, setReviewInfo] = useState(); //여기서 data가 들어오면 알아서 들어옴

  const fetchOrderData = async () => {
    try {
      const response = await axios.get("리뷰 정보를 가져올 URL");
      setReviewInfo(response.data); // 응답값 안에 데이터가 들어옴/어떻게 꺼낼지는 디버거로 확인
    } catch (error) {
      console.error("리뷰 못 가져온다:", error);
    }
  };

  // 처음 실행하거나 대괄호 안에 들어간 함수의 값이 변경됐을 때 작동
  useEffect(() => {
    fetchOrderData(); //처음 실행할 때 실행
  }, []);

  return (
    <>
      <div
        style={{ width: "100vw", height: "4vh", background: "#F4F4F4" }}
        className="text-center"
      ></div>
      <div className="main-container">
        <div
          style={{
            width: "100vw",
            height: "10vh",
            textAlign: "left",
            paddingLeft: "13vw",
            paddingTop: "3vh",
          }}
        >
          작성 가능한 리뷰
          <a style={{ paddingLeft: "50vw", fontSize: "12px" }}>쇼핑MY</a>
          <span>&gt;</span>
          <a style={{ fontSize: "12px" }}>상품리뷰</a>
          <span>&gt;</span>
          <a style={{ fontSize: "12px" }}>작성 가능한 리뷰</a>
        </div>
        <hr style={{ borderTop: "2px solid #F4F4F4" }} />
        <div
          className="sub-container"
          style={{
            width: "80vw",
            height: "70vh",
            margin: "0 auto",
            border: "1px solid black",
          }}
        >
          <div
            className="product-info"
            style={{
              width: "80vw",
              height: "30vh",
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "9%",
                height: "50%",
                border: "1px solid black",
                marginRight: "20px",
              }}
            >
              이미지
            </div>
            <div
              style={{
                width: "90%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <a
                style={{
                  display: "block",
                  fontSize: "13px",
                }}
              >
                구매일
              </a>
              <a
                style={{
                  display: "block",
                }}
              >
                상품제목
              </a>
              <a
                style={{
                  display: "block",
                  fontSize: "13px",
                }}
              >
                판매자
              </a>
              <a
                style={{
                  display: "block",
                  fontSize: "13px",
                }}
              >
                옵션
              </a>
              <button
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "15%",
                  transform: "translateY(-50%)",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#00c73c",
                  padding: "8px 16px",
                  fontSize: "13px",
                  color: "green",
                }}
              >
                작성하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CanWriteReview;
