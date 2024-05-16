import { Card } from "antd";
import "./payment.css";

const productData = {
  productId: 1,
  name: "test1",
  images: ["image1.jpg", "image2.jpg"],
  sellerId: 1,
  sellerName: "Seller 1",
  options: [
    {
      optionGroupId: 1,
      optionGroupName: "옵션 그룹 1",
      optionId: 1,
      optionName: "옵션 1",
      amount: 5,
    },
    {
      optionGroupId: 2,
      optionGroupName: "옵션 그룹 2",
      optionId: 2,
      optionName: "옵션 2",
      amount: 5,
    },
  ],
  totalPrice: 23000,
  amount: 10,
};

const PaymentComponent = () => {
  const username = "김철순";
  const seller = productData.sellerName;
  const productName = productData.name;
  const productAmount = productData.amount;
  const img = productData.images[0];
  const totalMoney = productData.totalPrice;
  let option = [];
  productData.options.forEach((el) => {
    const req = [
      el.optionGroupId,
      el.optionGroupName,
      el.optionId,
      el.optionName,
    ];
    option.push(req);
  });

  return (
    <div
      className="div"
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "1080px",
        margin: "0 auto",
        display: "flex",
      }}
    >
      <div className="w-8/12">
        <div className="header">
          <div className="header_inner">
            <h3 className="header_title">배송지</h3>
          </div>
          <div style={{ margin: "5px" }}>
            <Card
              title={username}
              bordered={true}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <input
                id="menu"
                type="checkbox"
                className="h-4 w-4 appearance-none rounded-full border-green-600 checked:bg-green-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 border-2"
              ></input>
              <label htmlFor="menu" className="m-1">
                배송메모 개별 입력
              </label>
              <textarea
                rows={5}
                placeholder="여기에 입력해주세요."
                className="w-full h-full mt-5 text- border-double border p-1 resize-none"
              ></textarea>
              <input
                id="menu"
                type="checkbox"
                className="h-4 w-4 appearance-none rounded-full border-green-600 checked:bg-green-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 border-2"
              ></input>
              <label htmlFor="menu" className="m-1">
                다음에도 사용할게요
              </label>
            </Card>
          </div>
          <div className="header_inner">
            <h3 className="header_title">주문 상품</h3>
          </div>
          <div style={{ margin: "5px" }}>
            <Card
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 style={{ fontSize: "20px" }}>{seller}</h3>
                  <h3
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    3000
                  </h3>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="m-3">
                    <img src={img} className="w-4 h-5" alt="사진이 없습니다." />
                  </div>
                  <div>
                    <span>{productName}</span>

                    <div style={{ display: "flex" }}>
                      {option.map((el) => (
                        <>
                          <span>{el[1]}</span>
                          <span>{"  "}</span>
                          <span>{el[3]}</span>
                        </>
                      ))}
                    </div>
                    <strong>{totalMoney}</strong>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* <div className="w-4/12 m-7">
        <div>
          <Card />
        </div>
      </div> */}
    </div>
  );
};
export default PaymentComponent;
