import { Link } from "react-router-dom"
import SearchBrandFilterItem from '../atom/SearchBrandFilterItem'

const ProductSearch = () => {
    const testBrandArr = ["오뚜기", "CJ", "청정원", "풀무원", "농심", "동원"];

    return (
        <>
            <div>
                <div 
                    style={{paddingLeft:"12vw", paddingRight:"12vw", paddingTop:"20px"}}>
                    <div className="w-auto bg-white flex flex-row text-white text-sm items-center">
                        <div style={{width:"160px", height:"43px", backgroundColor:"rgb(82, 95, 120)"}}
                            className="flex items-center pl-5">
                            브랜드
                        </div>
                        <div style={{fontSize:"10pt"}} className="flex gap-6 pl-5 text-black text-sm">
                            {testBrandArr.map((brand, i) => (
                                <div key={i}>
                                    <SearchBrandFilterItem link="/home" displayName={brand}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-auto bg-white flex flex-row text-white text-sm items-center">
                        <div style={{width:"160px", height:"43px", backgroundColor:"rgb(82, 95, 120)"}}
                            className="flex items-center pl-5">
                            가격
                        </div>
                        <div style={{fontSize:"10pt"}} className="flex gap-1 pl-5 text-black">
                            <div>직접입력</div>
                            <input className="w-32 border border-gray-300"/>
                            <div>~</div>
                            <input className="w-32 border border-gray-300"/>
                            <Link>
                                <div style={{width:"25px", height:"25px", 
                                    backgroundImage:"url(https://ssl.pstatic.net/shoppingsearch/static/pc/pc-240425-120020/img/sprite/png/spSearch.png)", 
                                    backgroundSize:"255px 251px",
                                    backgroundPosition:"-64px -32px"
                                }}></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductSearch