import { useState, useEffect } from "react"; // useEffect 추가
import RatingToStar from "../atom/RatingToStar";
import axios from "axios";

const MyReview = () => {
  // 상품 정보를 담을 state
  const [reviewInfo, setReviewInfo] = useState(); //여기서 data가 들어오면 알아서 들어옴

  // 데이터를 불러오는 함수
  const fetchData = async () => {
    try {
      const response = await axios.get("리뷰 정보를 가져올 URL");
      setReviewInfo(response.data); // 응답값 안에 데이터가 들어옴/어떻게 꺼낼지는 디버거로 확인
    } catch (error) {
      console.error("리뷰 못 가져온다:", error);
    }
  };

  const onClickUpdate = async () => {
    try {
      const response = await axios.get("수정URL");
      console.log(response.data);
    } catch (error) {
      console.error("API 호출 중 오류 발생", error);
    }
  };

  const onClickDelete = async () => {
    try {
      const response = await axios.get("수정URL");
      console.log(response.data);
    } catch (error) {
      console.error("API 호출 중 오류 발생", error);
    }
  };

  // 처음 실행하거나 대괄호 안에 들어간 함수의 값이 변경됐을 때 작동
  useEffect(() => {
    fetchData(); //처음 실행할 때 실행
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
          내가 작성한 리뷰
          <a style={{ paddingLeft: "50vw", fontSize: "12px" }}>쇼핑MY</a>
          <span>&gt;</span>
          <a style={{ fontSize: "12px" }}>상품리뷰</a>
          <span>&gt;</span>
          <a style={{ fontSize: "12px" }}>내가 작성한 리뷰</a>
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
            }}
          >
            <div
              style={{
                width: "100%",
                height: "50%",
                border: "1px solid black",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "8%",
                  height: "80%",
                  border: "1px solid black",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              ></div>
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
                  }}
                >
                  상품명
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
              </div>
            </div>
            <div
              className="review-content"
              style={{
                width: "80%",
                height: "50%",
                display: "flex",
              }}
            >
              <div
                className="point-content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  paddingRight: "75%",
                }}
              >
                <RatingToStar rating="3" />
                <a
                  style={{
                    fontSize: "13px",
                  }}
                >
                  내용
                </a>
              </div>
              <div
                style={{
                  height: "100%",
                  aspectRatio: "1 / 1",
                  border: "1px solid black",
                }}
              ></div>
              <div
                style={{
                  width: "20%",
                  height: "100%",
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "53%",
                    right: "12%",
                    transform: "translateY(-50%)",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    backgroundColor: "#f0f0f0",
                    padding: "8px 16px",
                    fontSize: "13px",
                    color: "#333",
                  }}
                  onClick={onClickUpdate}
                >
                  수정하기
                </button>
                <div
                  style={{
                    backgroundImage:
                      "url(https://shopv.pstatic.net/web/shopping-web/vp/static/20240509104537/img/sprite/png/spSv_my.png)",
                    backgroundSize: "401px 374px",
                    backgroundPosition: "-200px -311px",
                    width: "16px",
                    height: "15px",
                    position: "absolute",
                    top: "46%",
                    right: "12%",
                  }}
                  onClick={onClickDelete}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyReview;
