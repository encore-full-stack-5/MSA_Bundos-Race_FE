import { useState } from "react"
import RatingToStart from "../atom/RatingToStar"

const ReviewPopup = (props) => {
    const testImageArr = [
        "https://phinf.pstatic.net/checkout.phinf/20240428_159/171423409095854zcR_JPEG/1000005170.jpg?type=w640",
        "https://phinf.pstatic.net/checkout.phinf/20240428_270/1714234091397rsoF6_JPEG/1000005171.jpg?type=w640",
    ];
    const testOptionArr = [
        "크기선택:대과(14mm이하)",
        "중량선택:500g(250g2팩)"
    ]

    const [largeImage, setLargeImage] = useState(0);

    const ReviewLargeImage = () => {
        return testImageArr.length === 0 ? (<div className="w-3/5 flex justify-center items-center text-gray-400">이미지가 없는 리뷰입니다</div>) : (<img src={testImageArr[largeImage]} alt="" className="w-3/5 object-contain" />)
    }

    return (
        <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-60">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row bg-gray-200" style={{width:"920px", height:"540px"}}>
                <ReviewLargeImage />
                <div className="flex flex-col w-2/5 justify-between pl-5 py-3 border-l border-gray-300 bg-white">
                    <div className="flex flex-col">
                        <RatingToStart rating={4}/>
                        <div className="flex flex-row gap-2 text-gray-400 text-xs pb-3">
                            <div>
                                {"이름"}
                            </div>
                            <div> · </div>
                            <div>
                                {"날짜"}
                            </div>
                        </div>
                        <div className="border-y border-gray-200 flex flex-col h-96 overflow-y-auto pt-3 pr-3">
                            <div className="text-stone-500" style={{fontSize:"10pt"}}>
                                {testOptionArr.map((option, i) => (
                                    <div>
                                        {option}
                                    </div>
                                ))}
                            </div>
                            <hr className="my-3"/>
                            <div className="text-sm">
                                {"내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용"}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-0.5 pb-5">
                        {testImageArr.map((src,i) => (
                            <img 
                                src={src}
                                alt=""
                                style={{objectFit:"cover", width:"40px", height:"40px", cursor:"pointer"}}
                                onClick={() => setLargeImage(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex w-24 h-24 justify-center items-center fixed top-0 right-0 cursor-pointer"
                onClick={() => props.onClick(0)}>
                <div style={{
                    backgroundImage: "url(https://static-resource-smartstore.pstatic.net/smartstore/p/static/20240503114051/img/sprite/svg/spIcon_svg.svg)",
                    backgroundSize: "831px 820px",
                    backgroundPosition: "-744px -255px",
                    width: "30px",
                    height: "30px"
                }} />
            </div>
        </div>
    )
}
export default ReviewPopup