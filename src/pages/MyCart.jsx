import CheckBox from "../atom/CheckBox"
import MyCartProduct from "../components/MyCartProduct"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useRecoilValue } from 'recoil';
import { address } from '../store/address';

const MyCart = () => {
    const testData = [{

    }]
    const [data, setData] = useState(testData);
    const link = useRecoilValue(address);
    const getData = async () => {
        try{
            const response = await axios.get(
                "http://" + link + "/carts?id=" + "00000000-0000-0000-0000-000000000001"//localStorage.getItem("id")
            );
            console.log(response.data);
            setData(response.data);
        } catch(error) {
            alert("상품 정보를 불러오는데 오류가 발생했습니다.")
        }
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div style={{minHeight:"100%"}} className="flex flex-col bg-gray-100">
            <div style={{ paddingLeft:"13vw", paddingRight:"13vw"}} className="flex flex-row justify-between py-4 bg-white">
                <div className="flex flex-row gap-2 items-center cursor-pointer">
                    <CheckBox check={false} />
                    <div className="font-semibold">
                        전체 선택
                    </div>
                </div>
                <div className="flex flex-row gap-0.5 items-center cursor-pointer px-2 py-0.5 border border-gray-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico_delete--2NfiVYXLHf"><path d="M13 2.5l.707.707-4.646 4.647 4.646 4.646-.707.707-4.646-4.646-4.647 4.646L3 12.5l4.647-4.646L3 3.207l.707-.707 4.647 4.647L13 2.5z" fill="#BDC0C6"></path></svg>
                    <div className="text-gray-600">
                        선택 삭제
                    </div>
                </div>
            </div>
            {data &&
                <div style={{ paddingLeft:"13vw", paddingRight:"13vw", minHeight:"300px"}} className="pt-7">
                    {data && data.map((e,i) => (
                        <MyCartProduct
                            productId={e.ProductID}
                            cartId={e.cartProductId}
                            delivery={e.productDelivery}
                            discount={e.productDiscount}
                            image={e.productImage}
                            name={e.productName}
                            options={e.productOptions}
                            price={e.productPrice}
                            qty={e.productQty}
                            seller={e.productSeller}
                        />
                    ))}
                </div>
            }
            
        </div>
    )
}
export default MyCart