import CheckBox from "../atom/CheckBox"
import MyCartProduct from "../components/MyCartProduct"
import { useEffect, useState } from 'react';
import axios from "axios";
import { useRecoilValue } from 'recoil';
import { address } from '../store/address';
import TopButton from "../components/TopButton";

const MyCart = () => {
    const [checkAll, setCheckAll] = useState(true);
    const [checked, setchecked] = useState([]);
    const [data, setData] = useState([]);
    const link = useRecoilValue(address);


    const getData = async () => {
        try{
            const response = await axios.get(link + "/carts?token=" + localStorage.getItem("uuid"));
            console.log(response.data);
            let checkArr = []
            for(let i=0; i<response.data.length; i++)
                checkArr.push(true);
            setchecked(checkArr);
            setData(response.data);
        } catch(error) {
            alert("상품 정보를 불러오는데 오류가 발생했습니다.")
        }
    }
    const addOrder = async () => {
        alert("하나 주문")
    }
    const addOrderAll = async () => {
        alert("모두 주문")
    }
    const deleteCart = async (n) => {
        try{
            const response = await axios.delete(link + "/carts?id=" + data[n].cartProductId);
            console.log(response);
            getData();
            alert("상품을 내 장바구니에서 제외했습니다.");
        } catch(error) {
            alert("장바구니를 갱신하는데 오류가 발생했습니다.");
        }
    }
    const deleteCheckedCart = async () => {
        try {
            checked.forEach(async (e,i) => {
                if (e) {
                    const response = await axios.delete(link + "/carts?id=" + data[i].cartProductId);
                    console.log(response);
                }
            });
            alert("선택된 상품들을 내 장바구니에서 제외했습니다.");
            window.location.reload();
        } catch(error) {
            alert("장바구니를 갱신하는데 오류가 발생했습니다.");
        }
    }


    const changeCheckAll = () => {
        let checkArr = checked.slice();
        for(let i=0; i<checkArr.length; i++)
            checkArr[i] = !checkAll;
        setchecked(checkArr);
        setCheckAll(!checkAll);
    }
    const changeCheck = (n) => {
        let checkArr = checked.slice();
        checkArr[n] = !checkArr[n];
        setchecked(checkArr);
    }
    const TotalPrice = () => {
        let total = 0;
        data.forEach(e => {
            total += e.productPrice - e.productPrice * e.productDiscount/100 + e.productDelivery;
            e.productOptions?.forEach(ee => {
                total += ee.optionPrice;
            })
        });
        return (
            <div className="pl-4 text-3xl font-bold">
                {total + "원"}
            </div>
        );
    }


    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    return (
        <div style={{minHeight:"100%"}} className="flex flex-col bg-gray-100">
            <div style={{ paddingLeft:"13vw", paddingRight:"13vw"}} className="flex flex-row justify-between py-4 bg-white">
                <div onClick={changeCheckAll} className="flex flex-row gap-2 items-center cursor-pointer">
                    <CheckBox check={checkAll} />
                    <div className="font-semibold">
                        전체 선택
                    </div>
                </div>
                <div onClick={deleteCheckedCart} className="flex flex-row gap-0.5 items-center cursor-pointer px-2 py-0.5 border border-gray-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico_delete--2NfiVYXLHf"><path d="M13 2.5l.707.707-4.646 4.647 4.646 4.646-.707.707-4.646-4.646-4.647 4.646L3 12.5l4.647-4.646L3 3.207l.707-.707 4.647 4.647L13 2.5z" fill="#BDC0C6"></path></svg>
                    <div className="text-gray-600">
                        선택 삭제
                    </div>
                </div>
            </div>

            <div style={{ paddingLeft:"13vw", paddingRight:"13vw", minHeight:"300px"}} className="pt-7">
                {data?.map((e,i) => (
                    <MyCartProduct
                        checked={checked[i]}
                        changeCheck={() => changeCheck(i)}
                        deleteCart={() => deleteCart(i)}
                        addOrder={() => addOrder(i)}
                        productId={e.ProductID}
                        cartId={e.cartProductId}
                        delivery={e.productDelivery}
                        discount={e.productDiscount}
                        image={e.productImage}
                        name={e.productName}    
                        options={e.productOptions || []}
                        price={e.productPrice}
                        qty={e.productQty}
                        seller={e.productSeller}
                    />
                ))}
            </div>

            <div className="h-20"></div>
            <div style={{paddingRight:"13vw"}} className="fixed bottom-0 left-0 w-full h-20 bg-black flex flex-row justify-end text-white items-center">
                <div className="text-lg">
                    총 <span className="font-bold">{data ? data.length : 0}건</span> 주문금액
                </div>
                <TotalPrice />
                <div onClick={addOrderAll} className="ml-9 rounded-lg text-black px-16 py-3 font-bold cursor-pointer" style={{backgroundColor:"#00c63a"}}>
                    주문하기
                </div>
            </div>
            
            {document.body.scrollHeight > document.body.clientHeight && (<TopButton bottom={"100px"}/>)}
        </div>
    )
}
export default MyCart