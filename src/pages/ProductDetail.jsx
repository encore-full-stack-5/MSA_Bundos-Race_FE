import ProductOptionGroup from "../components/ProductOptionGroup";
import ReviewSmallBox from "../components/ReviewSmallBox";
import ReviewPopupBox from "../components/ReviewPopupBox";
import ReviewFullBox from "../components/ReviewFullBox";
import TopButton from "../components/TopButton";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { address } from "../store/address";

const ProductDetail = (req, res) => {
  const [reviewInfo, setReviewInfo] = useState([]); //여기서 data가 들어오면 알아서 들어옴
  const [ReviewOrder, setReviewOrder] = useState("0");
  const [ReviewPopup, setReviewPopup] = useState("0");
  const [sumPrice, setSumPrice] = useState(0);
  const [submitMode, setSubmitMode] = useState();
  const [data, setData] = useState();
  const link = useRecoilValue(address);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await axios.get(
        link + "/products/" + searchParams.get("id")
      );
      console.log(response.data);
      setData(response.data);
      updatePrice(
        (response.data.price * (100 - response.data.discountRate)) / 100
      );
    } catch (error) {
      alert("상품 정보를 불러오는 중에 오류가 발생했습니다.");
    }
  };

  const fetchReview = async () => {
    const id = searchParams.get("id");
    try {
      const response = await axios.get(
        `http://localhost:8081/api/v1/reviews/${id}`
      );
      console.log(id);
      console.log(response.data);
      setReviewInfo(response.data); // 응답값 안에 데이터가 들어옴/어떻게 꺼낼지는 디버거로 확인
    } catch (error) {
      console.error("리뷰 못 가져온다:", error);
    }
  };

  const ChangeReivewOrder = (n) => {
    const beforeElement = document.getElementById("reviewOrder" + ReviewOrder);
    beforeElement.style.color = "rgb(209 213 219)";
    setReviewOrder(n);
    const afterElement = document.getElementById("reviewOrder" + n);
    afterElement.style.color = "black";
  };
  const SetReviewSmallComponent = (props) => {
    if (reviewInfo.length > props.n) {
      return (
        <ReviewSmallBox
          id={reviewInfo[props.n].id}
          rating={reviewInfo[props.n].point}
          name={reviewInfo[props.n].username}
          date={reviewInfo[props.n].date}
          content={reviewInfo[props.n].content}
          onClick={setReviewPopup}
        />
      );
    }
    return "";
  };
  const SetReviewFullComponent = (props) => {
    return (
      <ReviewFullBox
        id={props.review.id}
        rating={props.review.point}
        name={props.review.username}
        date={"2024-01-01"}
        content={props.review.content}
        options={["옵션1", "옵션2"]}
        onClick={setReviewPopup}
      />
    );
  };
  const SetReviewPopupComponent = (props) => {
    if (ReviewPopup > 0) {
      return <ReviewPopupBox onClick={setReviewPopup} />;
    }
    return "";
  };

  const updatePrice = (e = 0) => {
    let sum = e;
    if (data) {
      sum = (data.price * (100 - data.discountRate)) / 100;
      const form = document
        .getElementsByName("optionForm")[0]
        .getElementsByTagName("select");
      for (let i = 0; i < form.length; i++) {
        if (form[i].value) {
          const optionCode = form[i].value.split("_");
          sum += data.optionGroups[optionCode[0]].options[optionCode[1]].price;
        }
      }
    }
    setSumPrice(Math.round(sum));
  };

  const testFunc = async (e) => {
    e.preventDefault();
    if (submitMode === 1) {
      try {
        const postOptions = [];
        const form = document
          .getElementsByName("optionForm")[0]
          .getElementsByTagName("select");
        for (let i = 0; i < form.length; i++) {
          if (form[i].value) {
            const str = form[i].value.split("_");
            const option = {
              optionGroupId: data.optionGroups[str[0]].id,
              optionGroupName: data.optionGroups[str[0]].name,
              optionId: data.optionGroups[str[0]].options[str[1]].id,
              optionName: data.optionGroups[str[0]].options[str[1]].name,
              optionPrice: data.optionGroups[str[0]].options[str[1]].price,
            };
            postOptions.push(option);
          }
        }
        // searchParams.getAll("options").forEach(e => {
        //     const str = e.split("_");
        //     const option = {
        //         optionGroupId: data.optionGroups[str[0]].id,
        //         optionGroupName: data.optionGroups[str[0]].name,
        //         optionId: data.optionGroups[str[0]].options[str[1]].id,
        //         optionName: data.optionGroups[str[0]].options[str[1]].name,
        //         optionPrice: data.optionGroups[str[0]].options[str[1]].price,
        //     }
        //     postOptions.push(option);
        // });
        const response = await axios.post(
          link + "/carts?token=" + localStorage.getItem("uuid"),
          {
            productId: data.id,
            productImage: data.images[0],
            productName: data.name,
            productPrice: data.price,
            productDiscount: data.discountRate,
            productQty: 1,
            productSeller: data.seller.name,
            productDelivery: data.deliveryPrice,
            cartOption: [...postOptions],
          }
        );
        console.log(postOptions);
        alert("상품을 장바구니에 추가했습니다.");
      } catch (error) {
        alert("상품을 장바구니에 담는 중에 오류가 발생했습니다.");
      }
    }
  };

  const [searchParams] = useSearchParams();
  useEffect(() => {
    getData();
    fetchReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        style={{ paddingLeft: "13vw", paddingRight: "13vw" }}
        className="flex flex-col items-center pb-10"
      >
        <div style={{ maxWidth: "900px" }} className="w-full">
          {data == null ? (
            ""
          ) : (
            <div className="flex flex-col">
              <div id="upperBox">
                <div className="border border-gray-300 mt-5 mb-5 flex flex-row">
                  <div className="flex flex-col justify-start flex-1 border-r border-gray-300">
                    <img
                      src={data.images[0]}
                      alt=""
                      className="w-full aspect-square"
                    />
                    <div className="flex flex-row gap-0.5 justify-center mt-4 mb-10">
                      {data.images.map((e, i) => (
                        <div
                          id={"thumbnail" + i}
                          onClick={() => {}}
                          className="cursor-pointer"
                        >
                          <img src={e} alt="" className="w-10 aspect-square" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex flex-col justify-start flex-1"
                    style={{ maxWidth: "50%" }}
                  >
                    <div className="p-6">
                      <div className="font-bold text-lg">{data.name}</div>
                      <div className="mt-4 mb-4 flex flex-row justify-between items-center">
                        <div className="text-red-600 text-3xl">
                          {data.discountRate > 0 ? data.discountRate + "%" : ""}
                        </div>
                        <div className="flex flex-row items-center font-bold">
                          <div className="text-1xl text-gray-400 line-through decoration-2 pr-3">
                            {data.discountRate > 0 ? data.price + "원" : ""}
                          </div>
                          <div className="text-2xl">
                            {data.discountRate > 0
                              ? Math.round(
                                  (data.price * (100 - data.discountRate)) / 100
                                ) + "원"
                              : data.price + "원"}
                          </div>
                        </div>
                      </div>
                      <hr />
                      <form name="optionForm" onSubmit={(e) => testFunc(e)}>
                        <div className="flex flex-col my-5 gap-2">
                          {data.optionGroups.map((e, i) => (
                            <ProductOptionGroup
                              id={i}
                              name={e.name}
                              options={e.options}
                              require={e.necessary}
                              onChange={updatePrice}
                            />
                          ))}
                        </div>
                        <hr />
                        <div className="flex flex-row items-center my-5 justify-between">
                          <div className="text-sm font-bold">총 상품 금액</div>
                          <div className="text-red-600 text-2xl font-bold">
                            {sumPrice + "원"}
                          </div>
                        </div>
                        <div className="flex flex-row gap-2">
                          <input
                            type="submit"
                            name="action"
                            onClick={() => setSubmitMode(1)}
                            className="flex-1 rounded-e rounded-s border border-gray-400 text-center py-2 cursor-pointer"
                            style={{ fontSize: "11pt", fontWeight: "600" }}
                            value={"장바구니"}
                          ></input>
                          <input
                            type="submit"
                            name="action"
                            onClick={() => setSubmitMode(2)}
                            className="flex-1 rounded-e rounded-s border border-gray-400 text-center py-2 cursor-pointer"
                            style={{
                              fontSize: "11pt",
                              fontWeight: "600",
                              backgroundColor: "#25ce63",
                              borderColor: "#25ce63",
                            }}
                            value={"구매하기"}
                          ></input>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="font-bold py-3" style={{ fontSize: "11.5pt" }}>
                  최근 포토 리뷰
                  {/*<span className='text-orange-500'>({testReviewArr.length})</span>*/}
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col flex-1">
                    <div>
                      <SetReviewSmallComponent n="0" />
                      <div className="border-t border-gray-200 my-4" />
                      <SetReviewSmallComponent n="1" />
                    </div>
                  </div>
                  <div className="border-r border-gray-200 mx-5" />
                  <div className="flex flex-col flex-1">
                    <div>
                      <SetReviewSmallComponent n="2" />
                      <div className="border-t border-gray-200 my-4" />
                      <SetReviewSmallComponent n="3" />
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-row border-b justify-between border-gray-700 mt-12 text-center font-bold"
                  style={{ fontSize: "10pt" }}
                >
                  <div className="flex-1 py-2.5 bg-gray-600 text-white cursor-pointer">
                    상세정보
                  </div>
                  <div className="flex-1 py-2.5 bg-gray-100 text-gray-600 cursor-pointer">
                    {"리뷰 4"}
                  </div>
                  <div className="flex-1 py-2.5 bg-gray-100 text-gray-300">
                    Q&A
                  </div>
                  <div className="flex-1 py-2.5 bg-gray-100 text-gray-300">
                    반품/교환정보
                  </div>
                </div>
              </div>

              <div id="viewDetail" className="font-bold my-3 pt-4 text-xl">
                상품 상세
              </div>
              <div className="bg-gray-100" style={{ height: "800px" }}>
                {data.description}
              </div>

              <div
                id="viewReview"
                className="flex flex-row justify-between my-3 pt-4"
              >
                <div className="font-bold text-xl">
                  {"리뷰 " + reviewInfo.length + "건"}
                </div>

                <div className="flex flex-row items-center">
                  <div
                    id="reviewOrder0"
                    onClick={() => ChangeReivewOrder(0)}
                    className="font-bold text-gray-300 px-2 text-sm h-fit cursor-pointer"
                  >
                    최신순
                  </div>
                  <div className="border-r border-gray-300 h-3" />
                  <div
                    id="reviewOrder1"
                    onClick={() => ChangeReivewOrder(1)}
                    className="font-bold text-gray-300 px-2 text-sm h-fit cursor-pointer"
                  >
                    평점 높은순
                  </div>
                  <div className="border-r border-gray-300 h-3" />
                  <div
                    id="reviewOrder2"
                    onClick={() => ChangeReivewOrder(2)}
                    className="font-bold text-gray-300 px-2 text-sm h-fit cursor-pointer"
                  >
                    평점 낮은순
                  </div>
                </div>
              </div>
              <>
                {/* <div className='font-bold my-3 pt-16 text-xl'>
                            상품 리뷰
                        </div>
                        <div className='bg-gray-100 p-8 flex flex-row gap-5 justify-around h-60'>
                            <div className='flex flex-col items-center'>
                                <div className='text-sm font-bold flex-1'>
                                    사용자 총 평점
                                </div>
                                <div className='flex flex-col gap-3 justify-center text-center' style={{flex:"3"}}>
                                    <div className='text-5xl' style={{color:"orangered"}}>★★★★★</div>
                                    <div className='text-4xl text-gray-300'>
                                        <span className='text-black font-bold'>5.0</span>/5
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='text-sm font-bold flex-1'>
                                    전체 리뷰수
                                </div>
                                <div className='flex flex-col gap-3 justify-center text-center' style={{flex:"3"}}>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-sm font-bold flex-1'>
                                    평점 비율
                                </div>
                                <div className='flex-3'>

                                </div>
                            </div>
                        </div> */}
              </>
              <div className="flex flex-col">
                {reviewInfo.map((review) => (
                  <SetReviewFullComponent review={review} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <TopButton />

      <SetReviewPopupComponent />
    </>
  );
};
export default ProductDetail;
