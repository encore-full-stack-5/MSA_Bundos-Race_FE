import { Link, useNavigate } from "react-router-dom"

const ShoppingMyBox = (props) => {
    const navigate = useNavigate(); 

    const gotoMyPage = (link) => {
        if (localStorage.getItem("uuid"))
            navigate(link);
        else
            alert("로그인이 필요한 서비스입니다.");
    }

    return (
        <div className="absolute bg-white w-36 top-6 left-1/2 -translate-x-1/2 flex flex-col p-4 font-normal text-gray-600 gap-2 drop-shadow-md" style={{fontSize:"10pt"}}>
            <div onClick={() => gotoMyPage("/my/cart")} className="cursor-pointer">장바구니</div>
            <div onClick={() => gotoMyPage("/my/orders")}  className="cursor-pointer">주문확인</div>
            <div onClick={() => gotoMyPage("/my/review")}  className="cursor-pointer">상품 리뷰</div>
        </div>
    )
}
export default ShoppingMyBox