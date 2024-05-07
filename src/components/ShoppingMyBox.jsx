import { Link } from "react-router-dom"

const ShoppingMyBox = (props) => {
    return (
        <div className="absolute bg-white w-36 top-6 left-1/2 -translate-x-1/2 flex flex-col p-4 font-normal text-gray-600 gap-2 drop-shadow-md" style={{fontSize:"10pt"}}>
            <Link to={"/my/cart"}>
                <div className="cursor-pointer">장바구니</div>
            </Link>
            <Link to={"/my/orders"}>
                <div className="cursor-pointer">주문확인</div>
            </Link>
            <Link to={"/my/review"}>
                <div className="cursor-pointer">상품 리뷰</div>
            </Link>
            
        </div>
    )
}
export default ShoppingMyBox