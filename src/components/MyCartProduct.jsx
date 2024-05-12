import { Link } from "react-router-dom"
import CheckBox from "../atom/CheckBox"


const MyCartProduct = (props) => {
    const SumPrice = () => {
        let sum = props.price;
        props.options.forEach(e => sum += e.optionPrice);
        return sum + "원";
    }
    const TotalPrice = () => {
        let sum = props.price + props.delivery;
        sum -= Math.round(props.price * (props.discount/100));
        props.options.forEach(e => sum += e.optionPrice);
        return sum + "원";
    }

    return (
        <div className="mb-5 rounded-2xl bg-white">
            <div className="flex flex-col p-6 px-7">
                <div className="flex flex-row pb-4 border-b-2 border-black items-center justify-between">
                    <div onClick={props.changeCheck} className="flex flex-row gap-3 cursor-pointer items-center justify-between">
                        <CheckBox check={props.checked}/>
                        <div className="font-bold text-lg">
                            {props.seller}
                        </div>
                    </div>
                    <div onClick={props.deleteCart} className="w-8 h-6 cursor-pointer flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="ico_delete--2NfiVYXLHf"><path d="M13 2.5l.707.707-4.646 4.647 4.646 4.646-.707.707-4.646-4.646-4.647 4.646L3 12.5l4.647-4.646L3 3.207l.707-.707 4.647 4.647L13 2.5z" fill="#BDC0C6"></path></svg>
                    </div>
                </div>
                <div className="flex flex-row border-b border-gray-400">
                    <Link to={"/products?id="+props.productId}>
                        <div className="flex flex-row py-6 pr-6 border-r border-gray-200" style={{minWidth:"20svw"}}>
                            <img 
                                src={props.img}
                                alt=""
                                className="w-24 h-24 rounded-md mx-4 border border-gray-400"
                            />
                            <div className="flex flex-col">
                                <div className="font-bold">
                                    {props.name}
                                </div>
                                <div className="font-bold">
                                    {Math.round(props.price * (1-(props.discount/100))) + "원"}
                                    {10 > 0 ? <span className="pl-1 line-through text-gray-400 font-normal">
                                        {props.price}
                                    </span> : ""}
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="flex flex-col px-6 justify-center text-sm border-r border-gray-200" style={{maxWidth:"22svw", minWidth:"16svw"}}>
                        {props.options.length === 0 ?
                            <div className="text-center text-gray-300">
                                선택옵션이 없습니다.
                            </div>
                             : 
                             props.options.map((e,i) => (
                                <div>
                                    {e.optionGroupName + ": " + e.optionName}
                                    {e.optionPrice === 0 ? "" : " (+" + e.optionPrice + "원)"}
                                </div>
                            ))
                            }
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center border-r border-gray-200">
                        <div className="text-sm">
                            상품금액
                        </div>
                        <div className="font-bold">
                            {Math.round(props.price * (1-(props.discount/100)))+"원"}
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-sm">
                            배송비  
                        </div>
                        <div className="font-bold">
                            {props.delivery === 0 ? "무료" : props.delivery+"원"}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center pt-6 pb-2">
                    <div className="font-bold">
                        <div>
                            선택상품금액
                        </div>
                        <SumPrice />
                    </div>
                    <div className="font-bold text-3xl text-gray-300 px-4">+</div>
                    <div className="font-bold">
                        <div>
                            총 배송비
                        </div>
                        <div>
                            {props.delivery === 0 ? "무료" : props.delivery+"원"}
                        </div>
                    </div>
                    <div className="font-bold text-3xl text-gray-300 px-4">-</div>
                    <div className="font-bold">
                        <div>
                            즉시할인예상금액
                        </div>
                        <div style={{color:"orangered"}}>
                            {Math.round(props.price * (props.discount/100))+"원"}
                        </div>
                    </div>
                    <div className="border-r-2 border-gray-300 h-12 mx-10"/>
                    <div className="font-bold pr-12">
                        주문금액
                        <span className="font-extrabold pl-2" style={{color:"#00c63a"}}>
                            <TotalPrice />
                            {/* {props.price * (1-(props.discount/100)) + props.delivery +"원"} */}
                        </span>
                    </div>
                    <div onClick={props.addOrder} className="rounded-lg text-white px-8 py-3 font-bold cursor-pointer" style={{backgroundColor:"#00c63a"}}>
                        주문하기
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyCartProduct