import { Card } from "antd";
import "./payment.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { address } from "../../store/address";

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); 
  const link = useRecoilValue(address);
  const username = "박부릉도";

  const addOrder = async () => {
    try{
      console.log(searchParams);

      const postOptions = [];
      const optionNum = searchParams.getAll("optionsName").length
      for(let i=0; i<optionNum; i++) {
        const option = {
          optionGroupId: searchParams.getAll("optionsGId")[i],
          optionGroupName: searchParams.getAll("optionsGName")[i],
          optionId: searchParams.getAll("optionsId")[i],
          optionName: searchParams.getAll("optionsName")[i],
          amount: 1
        }
        postOptions.push(option);
      }

      const response = await axios.post(
        link + "/orders/create?token=" + localStorage.getItem("uuid"),
        {
          productId: searchParams.get("id"),
          name: searchParams.get("name"),
          image: searchParams.get("image"),
          sellerId: searchParams.get("sellerId"),
          sellerName: searchParams.get("sellerName"),
          options: postOptions,
          totalPrice: searchParams.get("totalPrice"),
          amount: 1,
          deliveryMemo: document.getElementById("deliveryMemo").value
        }
      );
      console.log(response);
      console.log(postOptions);
      alert("상품을 주문했습니다.");
      navigate("/home");

    }catch(e) {
      console.log(e);
      alert("주문을 완료하는중 오류가 발생했습니다.")
    }
  }


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
                id="deliveryMemo"
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
                  <h3 style={{ fontSize: "20px" }}>{searchParams.get("seller")}</h3>
                  <h3
                    style={{fontSize: "20px",}}
                    className="border border-gray-400 rounded-md px-2 py-0.5 cursor-pointer"
                    onClick={() => addOrder()}
                  >
                    주문하기
                  </h3>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="m-3">
                    <img src={searchParams.get("image")} className="h-20 aspect-square" alt="사진이 없습니다." />
                  </div>
                  <div>
                    <span>{searchParams.get("name")}</span>

                    <div style={{ display: "flex" }}>
                      {searchParams.get("optionTxt")}
                    </div>
                    <strong>{"가격" + searchParams.get("totalPrice") + "원"}</strong>
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
