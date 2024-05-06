import ProductOptionGroup from '../components/ProductOptionGroup'
import ReviewSmallBox from '../components/ReviewSmallBox'
import ReviewPopupBox from '../components/ReviewPopupBox'
import TopButton from '../components/TopButton';
import { useState } from 'react';

const ProductDetail = () => {
    const testImageArr = ["", "", "", ""];
    const testOptionArr = [
        {
            id: 1,
            name: "크기선택",
            require: true,
            options: [
                {
                    id: 1,
                    name: "대과(14mm 이하)",
                    price: 0,
                    qty: 100
                },
                {
                    id: 2,
                    name: "특대(15mm 이상)",
                    price: 0,
                    qty: 100
                },
                {
                    id: 3,
                    name: "왕특(18mm 이상)",
                    price: 0,
                    qty: 100
                },
            ],
        },
        {
            id: 2,
            name: "중량선택",
            require: true,
            options: [
                {
                    id: 1,
                    name: "250g",
                    price: 0,
                    qty: 100
                },
                {
                    id: 2,
                    name: "500g(250g2팩)",
                    price: 12500,
                    qty: 1
                },
                {
                    id: 3,
                    name: "1kg(250g4팩)",
                    price: 29500,
                    qty: 0
                },
            ],
        },
    ];
    const testReviewArr = [
        {
            id:1,
            name:"간지남",
            date:"24.04.1",
            rating:"1",
            content:"별로에요",
        },
        {
            id:2,
            name:"나야나",
            date:"24.03.13",
            rating:"4",
            content:"내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
        },
        {
            id:3,
            name:"분노한사람",
            date:"24.04.12",
            rating:"5",
            content:"아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용아무튼많은내용",
        },
        {
            id:4,
            name:"박박박",
            date:"24.03.28",
            rating:"1",
            content:"",
        },
    ];

    const [ReviewPopup, setReviewPopup] = useState("0");

    const SetReviewSmallComponent = (props) => {
        if(testReviewArr.length > props.n) {
            return (
                <ReviewSmallBox
                    id={testReviewArr[props.n].id}
                    rating={testReviewArr[props.n].rating}
                    name={testReviewArr[props.n].name}
                    date={testReviewArr[props.n].date}
                    content={testReviewArr[props.n].content}
                    onClick={setReviewPopup}
                />
            );
        }
        return "";
    }
    const SetReviewPopupComponent = (props) => {
        if (ReviewPopup > 0) {
            return (
                <ReviewPopupBox
                    onClick={setReviewPopup}
                />
            );
        }
        return "";
    }

    return (
        <>
            <div style={{ paddingLeft:"13vw", paddingRight:"13vw"}} className='flex flex-col items-center pb-10'>
                <div style={{maxWidth:"900px"}} className='w-full'>
                    <div className='flex flex-col'>
                        <div>
                            <div className="border border-gray-300 mt-5 mb-5 flex flex-row">
                                <div className="flex flex-col justify-start flex-1 border-r border-gray-300">
                                    <img 
                                        src=""
                                        alt=""
                                        className="w-full aspect-square"
                                    />
                                    <div className="flex flex-row gap-0.5 justify-center mt-4 mb-10">
                                        {testImageArr.map((e, i) => (
                                            <div id={"thumbnail"+i} onClick={() => {}} className='cursor-pointer'>
                                                <img 
                                                    src={e}
                                                    alt=""
                                                    className="w-10 aspect-square"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start flex-1">
                                    <div className="p-6">
                                        <div className="font-bold text-lg">
                                            {"상품이름"}
                                        </div>
                                        <div className="mt-4 mb-4 flex flex-row justify-between items-center">
                                            <div className="text-red-600 text-3xl">
                                                {"85%"}
                                            </div>
                                            <div className="flex flex-row items-center font-bold">
                                                <div className="text-1xl text-gray-400 line-through decoration-2 pr-3">
                                                    {"10000원"}
                                                </div>
                                                <div className="text-2xl">
                                                    {"10000원"}
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <form>
                                        <div className='flex flex-col my-5 gap-2'>
                                            {testOptionArr.map((e, i) => (
                                                <ProductOptionGroup name={e.name} options={e.options} require={e.require}/>
                                            ))}
                                        </div>
                                        <hr />
                                        <div className='flex flex-row items-center my-5 justify-between'>
                                            <div className='text-sm font-bold'>총 상품 금액</div>
                                            <div className="text-red-600 text-2xl font-bold">
                                                {"0원"}
                                            </div>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <input type='submit' 
                                                className='flex-1 rounded-e rounded-s border border-gray-400 text-center py-2 cursor-pointer' 
                                                style={{fontSize:"11pt", fontWeight:"600"}}
                                                value={"장바구니"}>
                                            </input>
                                            <input type='submit' 
                                                className='flex-1 rounded-e rounded-s border border-gray-400 text-center py-2 cursor-pointer' 
                                                style={{fontSize:"11pt", fontWeight:"600", backgroundColor:"#25ce63", borderColor:"#25ce63"}}
                                                value={"구매하기"}>
                                            </input>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className='font-bold py-3' style={{fontSize:"11.5pt"}}>
                                최근 포토 리뷰<span className='text-orange-500'>({testReviewArr.length})</span>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-col flex-1'>
                                    <div>
                                        <SetReviewSmallComponent n="0"/>
                                        <div className='border-t border-gray-200 my-4'/>
                                        <SetReviewSmallComponent n="1"/>
                                    </div>
                                </div>
                                <div className='border-r border-gray-200 mx-5'/>
                                <div className='flex flex-col flex-1'>
                                    <div>
                                        <SetReviewSmallComponent n="2"/>
                                        <div className='border-t border-gray-200 my-4'/>
                                        <SetReviewSmallComponent n="3"/>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-row border-b justify-between border-gray-700 mt-12 text-center font-bold' style={{fontSize:"10pt"}}>
                                <div className='flex-1 py-2.5 bg-gray-600 text-white cursor-pointer'>
                                    상세정보
                                </div>
                                <div className='flex-1 py-2.5 bg-gray-100 text-gray-600 cursor-pointer'>
                                    {"리뷰 4"}
                                </div>
                                <div className='flex-1 py-2.5 bg-gray-100 text-gray-300'>
                                    Q&A
                                </div>
                                <div className='flex-1 py-2.5 bg-gray-100 text-gray-300'>
                                    반품/교환정보
                                </div>
                            </div>
                        </div>

                        <div className='font-bold my-3 pt-4 text-xl'>
                            상품 상세
                        </div>
                        <div className='bg-gray-100' style={{height:"800px"}}/>

                        <div className='flex flex-row justify-between my-3 pt-4'>
                            <div className='font-bold text-xl'>
                                {"리뷰 123건"}
                            </div>
                            <div className='flex flex-row items-center'>
                                <div className='font-bold text-black px-2 text-sm h-fit'>최신순</div>
                                <div className='border-r border-gray-300 h-3' />
                                <div className='font-bold text-gray-300 px-2 text-sm h-fit'>평점 높은순</div>
                                <div className='border-r border-gray-300 h-3' />
                                <div className='font-bold text-gray-300 px-2 text-sm h-fit'>평점 낮은순</div>
                            </div>
                        </div>
                        <>{/* <div className='font-bold my-3 pt-16 text-xl'>
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
                        </div> */}</>

                    </div>
                </div>
            </div>

            <TopButton />

            <SetReviewPopupComponent />
        </>
    )
}
export default ProductDetail