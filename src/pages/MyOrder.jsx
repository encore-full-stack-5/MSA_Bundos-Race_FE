import { Card } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const link = "http://192.168.0.16:9000/api/v1/orders/user/order";
  // 데이터를 가져오는 함수 정의
  const fetchOrders = async () => {
    try {
      // API 호출
      const response = await axios.get(
        link +
          "?token=eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIwYThlMDA2Mi0zOGU0LTRhNjYtOTljYy03ZjlmZTE0MzFlODIiLCJ1dWlkIjoiMGE4ZTAwNjItMzhlNC00YTY2LTk5Y2MtN2Y5ZmUxNDMxZTgyIiwibmlja25hbWUiOiIxMjM0IiwiZXhwIjoxNzE1OTA5MDMzfQ.CIwS89-OAlq355Ebn7AwDFJlwxyNd2R-R4_VxIOL2_u1vaor6agf0Bug7wa-5_5c"
      );
      // 데이터 설정
      setOrders(response.data);
      console.log(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      // 에러 처리
      setError(error.message);
      setLoading(false);
      setOrders([]);
    }
  };

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    fetchOrders();
  }, []);

  // 로딩 중이면 로딩 메시지 표시
  if (loading) {
    return <div>Loading...</div>;
  }

  // 에러가 발생했으면 에러 메시지 표시
  if (error) {
    return <div>Error: {error}</div>;
  }

  // 데이터가 비어있으면 데이터 없음 메시지 표시
  if (orders.length === 0) {
    return <div>No orders found.</div>;
  }

  return (
    <>
      <div className="text-center m-5">주문확인</div>
      {orders.map((order) => {
        return (
          <>
            {order.products.map((product) => {
              return (
                <>
                  <div id={order?.orderId}>
                    <Card
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex" }}>
                          <div className="m-3">
                            <img
                              src={product.images[0]}
                              className="w-4 h-5"
                              alt="사진이 없습니다."
                            />
                          </div>
                          <div>
                            <span>{product.productName}</span>

                            <div style={{ display: "flex" }}>
                              {product.productOptions.map((option) => {
                                return (
                                  <>
                                    <span>{option.optionName}</span>
                                    <span></span>
                                  </>
                                );
                              })}
                            </div>
                            <div>
                              <strong>{order?.totalPrice}</strong>
                              <span style={{ margin: "20px" }}>
                                {order.createAt}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
};
export default MyOrder;
