import CountStar from "../atom/CountStar";

const ReviewWrite = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "10vh",
          background: "#F4F4F4",
          fontSize: "25px",
          textAlign: "center",
        }}
      >
        리뷰 작성 및 수정
      </div>
      <div
        className="star"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CountStar />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <textarea
          placeholder="리뷰를 입력하세요..."
          style={{
            width: "50%", // 너비를 50%로 설정
            height: "100px", // 높이를 100px로 설정
            padding: "10px", // 입력 상자 내부의 여백
            fontSize: "16px", // 글자 크기
            border: "1px solid #ccc", // 테두리 스타일
            borderRadius: "5px", // 테두리 둥글기
            resize: "vertical", // 세로 방향으로 크기 조정 가능
          }}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <input
          type="file"
          style={{
            width: "50%", // 너비 설정
            padding: "10px", // 내부 여백
            fontSize: "16px", // 글자 크기
          }}
          accept="image/*, .pdf" // 이미지와 PDF 파일만 허용
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          style={{
            width: "10%",
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4CAF50", // 초록색 배경
            color: "white", // 흰색 글씨
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          리뷰 등록하기
        </button>
      </div>
    </>
  );
};
export default ReviewWrite;
