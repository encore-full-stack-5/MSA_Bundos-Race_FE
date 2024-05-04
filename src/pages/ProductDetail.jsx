import ProductOptionGroup from '../components/ProductOptionGroup'
import ReviewSmallBox from '../components/ReviewSmallBox'

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
                },
                {
                    id: 2,
                    name: "특대(15mm 이상)",
                    price: 0,
                },
                {
                    id: 3,
                    name: "왕특(18mm 이상)",
                    price: 0,
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
                },
                {
                    id: 2,
                    name: "500g(250g2팩)",
                    price: 12500,
                },
                {
                    id: 3,
                    name: "1kg(250g4팩)",
                    price: 29500,
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

    return (
        <>
            <div style={{ paddingLeft:"13vw", paddingRight:"13vw"}} className='flex flex-col items-center'>
                <div style={{maxWidth:"900px"}} className='w-full'>
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
                    <div className='flex flex-col'>
                        <div className='font-bold my-3' style={{fontSize:"11.5pt"}}>
                            최근 리뷰<span className='text-orange-500'>({testReviewArr.length})</span>
                        </div>
                        <div className='flex flex-row'>
                            <div className='flex flex-col flex-1'>
                                <div>
                                    <ReviewSmallBox
                                        id={testReviewArr[0].id}
                                        rating={testReviewArr[0].rating}
                                        name={testReviewArr[0].name}
                                        date={testReviewArr[0].date}
                                        content={testReviewArr[0].content}/>
                                    <div className='border-t border-gray-200 my-4'/>
                                    <ReviewSmallBox
                                        id={testReviewArr[1].id}
                                        rating={testReviewArr[1].rating}
                                        name={testReviewArr[1].name}
                                        date={testReviewArr[1].date}
                                        content={testReviewArr[1].content}/>
                                </div>
                            </div>
                            <div className='border-r border-gray-200 mx-5'/>
                            <div className='flex flex-col flex-1'>
                                <div>
                                    <ReviewSmallBox
                                        id={testReviewArr[2].id}
                                        rating={testReviewArr[2].rating}
                                        name={testReviewArr[2].name}
                                        date={testReviewArr[2].date}
                                        content={testReviewArr[2].content}/>
                                    <div className='border-t border-gray-200 my-4'/>
                                    <ReviewSmallBox
                                        id={testReviewArr[3].id}
                                        rating={testReviewArr[3].rating}
                                        name={testReviewArr[3].name}
                                        date={testReviewArr[3].date}
                                        content={testReviewArr[3].content}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail