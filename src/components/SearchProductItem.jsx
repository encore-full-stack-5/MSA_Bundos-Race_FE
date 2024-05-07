import { Link } from "react-router-dom"

const SearchProductItem = (props) => {
    // const testCategoryArr = ["식품", "농산물", "과일", "블루베리"];

    return (
        <div className="flex flex-row pt-5 pb-5 pl-4 pr-4 border-b hover:bg-slate-100">
            <Link to={props.link}>
            <img 
                src={props.img}
                alt=""
                style={{width:"140px", height:"140px", marginRight:"20px"}}
            />
            </Link>
            <div className="flex flex-col gap-2 justify-between pt-1 pb-1">
                <Link to={props.link} style={{width:"fit-content"}}>
                <div style={{fontSize:"12pt", fontWeight:"700"}}>
                    {props.name}
                </div>
                </Link>
                <div className="flex flex-row gap-1 items-center">
                    <div className="text-red-500 font-bold text-lg pr-2">
                        {props.price}원
                    </div>
                    <svg width="14" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="price_svg_delivery__kOiSU"><path fill-rule="evenodd" clip-rule="evenodd" d="M.704 8.779c0 .02.02.04.04.04h.685c.163-.82.85-1.436 1.676-1.437C3.93 7.383 4.617 8 4.78 8.82h4.44c.162-.82.85-1.437 1.675-1.437.825 0 1.513.617 1.675 1.437h.686c.019 0 .039-.021.039-.041v-2.91a1.97 1.97 0 0 0-.133-.627l-1.149-2.548c-.006-.053-.194-.178-.24-.162h-3.28c-.02 0-.04.022-.04.043v4.078H.704V8.78zm2.4 1.477c.557 0 1.007-.476 1.009-1.064-.002-.589-.452-1.064-1.008-1.065-.558 0-1.008.476-1.01 1.065.002.588.452 1.063 1.01 1.064zm7.792 0c.557-.001 1.008-.476 1.008-1.064 0-.589-.45-1.064-1.008-1.066-.557.002-1.007.477-1.008 1.066 0 .588.451 1.063 1.008 1.064zM0 5.911V.785C.002.351.332.001.743 0h5.73c.41.002.742.35.743.785v.843h-.704V.785c0-.02-.02-.042-.039-.042H.743C.724.743.704.764.704.785v5.126h7.047V2.575c.001-.435.332-.785.743-.786h3.28c.38.017.697.228.875.586l1.149 2.548c.121.282.198.637.202.946v2.91c-.002.434-.331.783-.743.783h-.686c-.162.821-.85 1.437-1.675 1.437-.825 0-1.513-.616-1.675-1.437H4.78C4.617 10.383 3.93 11 3.105 11c-.826 0-1.514-.617-1.676-1.438H.744c-.412 0-.742-.35-.744-.783V5.91z" fill="#999"></path></svg>
                    <div style={{fontSize:"11pt", color:"rgb(160,160,160)"}}>
                    {props.delivery === 0 ? "무료" : props.delivery}
                    </div>
                </div>
                {/* <div className="text-gray-400 text-xs flex flex-row gap-1">
                    {testCategoryArr.map((e, i) => (
                        <div key={i}>
                            {i == 0 ? e : "> "+ e}
                        </div>
                    ))}
                </div> */}
                <div className="text-gray-400 text-sm">
                    판매자 : {props.seller}
                </div>
                <div className="flex flex-row text-sm text-gray-500 items-center">
                    {/* <div>리뷰 <span className="pr-2 text-emerald-500">{props.reviewCount}</span></div>
                    <div>· 구매건수 <span className="pr-2 text-emerald-500">{props.sellCount}</span></div> */}
                    <div>{/*"· "*/}등록일 <span className="pr-2 text-emerald-500">{props.createdAt}</span></div>
                    <div className="pr-2"> · </div>
                    <div className="cursor-pointer flex flex-row items-center">
                        <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" class="report_svg_report__xPbmh"><path clip-rule="evenodd" d="M6.999 1A4.999 4.999 0 0 0 2 6v4h10V6a5 5 0 0 0-5.001-5Z" stroke="#999" stroke-linejoin="round"></path><path d="M6.5 3.5a2 2 0 0 0-2 2" stroke="#999"></path><path clip-rule="evenodd" d="M1 13h12v-3H1v3Z" stroke="#999"></path></svg>
                        <div className="pl-1">신고하기</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchProductItem