import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
// import SearchBrandFilterItem from '../atom/SearchBrandFilterItem'
import SearchProductItem from '../components/SearchProductItem'
import TopButton from '../components/TopButton'

const ProductSearch = () => {
    const testBrandArr = ["오뚜기", "CJ", "청정원", "풀무원", "농심", "동원"];
    const testProductArr = [
        {
            id: 1,
            img: "",
            link: "/products",
            name: "분도의 황도캔",
            price: 3800,
            delivery: 0,
            seller: "박무릉도원",
            reviewCount: "0",
            sellCount: "1234",
            createdAt: "1998. 2."
        },
        {
            id: 2,
            img: "",
            link: "/products",
            name: "부릉부릉 미니카",
            price: 17500,
            delivery: 3000,
            seller: "박부릉도",
            reviewCount: "999",
            sellCount: "1",
            createdAt: "2024. 1."
        },
        {
            id: 3,
            img: "",
            link: "/products",
            name: "애쁠와치",
            price: 50,
            delivery: 0,
            seller: "수상한사람",
            reviewCount: "1",
            sellCount: "1",
            createdAt: "2024. 4."
        },
        {
            id: 4,
            img: "",
            link: "/products",
            name: "이름이긴상품이필요한데제가직접한번팔아보겠습니다",
            price: 180000050,
            delivery: 1000,
            seller: "판매자이름이길어봐야거기서거기지",
            reviewCount: "9999",
            sellCount: "10000",
            createdAt: "2022. 11."
        },
        {
            id: 5,
            img: "",
            link: "/products",
            name: "알유앀진석",
            price: 10,
            delivery: 0,
            seller: "큰형님",
            reviewCount: "0",
            sellCount: "0",
            createdAt: "2024. 5."
        },
    ];
    const [orderBy, setOrder] = useState(1);
    const [brandFilter, setBrandFilter] = useState(null);

    const changeOrder = (n) => {
        const beforeOrder = document.getElementById("order"+orderBy);
        beforeOrder.style.color = "rgb(140,140,140)"
        setOrder(n);
        const afterOrder = document.getElementById("order"+n);
        afterOrder.style.color = "black"
    }

    const changeBrandFilter = (n) => {
        if (brandFilter != null){
            const beforeBrand = document.getElementById("brand"+brandFilter);
            beforeBrand.style.color = "rgb(55,65,81)"
            beforeBrand.style.fontWeight = 400;
        }
        if (brandFilter === n) {
            setBrandFilter(null);
        } else {
            setBrandFilter(n);
            const afterBrand = document.getElementById("brand"+n);
            afterBrand.style.color = "black"
            afterBrand.style.fontWeight = 600;
        }
    }

    useEffect(() => {
        changeOrder(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div 
                style={{paddingLeft:"13vw", paddingRight:"13vw"}} 
                className="flex flex-col">
                <div className='pt-3 pb-3 text-sm font-bold'>
                    {"카테고리명"}
                </div>
                <div>
                    <div className="w-auto bg-white flex flex-row text-white text-sm items-center">
                        <div style={{width:"160px", height:"43px", backgroundColor:"rgb(82, 95, 120)"}}
                            className="flex items-center pl-5">
                            브랜드
                        </div>
                        <div style={{fontSize:"10pt"}} className="flex gap-6 pl-5 text-gray-700 text-sm">
                            {testBrandArr.map((brand, i) => (
                                <div id={"brand"+i} onClick={() => changeBrandFilter(i)} className='cursor-pointer'>
                                    {/* <SearchBrandFilterItem link="/home" displayName={brand}/> */}
                                    {brand}
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
                <div>
                    <div
                        style={{fontSize:"10pt", color:"rgb(140,140,140)"}}
                        className="pt-5 pb-3 flex flex-row gap-3">
                        {/* <div id="order0" onClick={() => changeOrder(0)} className='cursor-pointer'>
                            · 판매 많은순
                        </div> */}
                        <div id="order1" onClick={() => changeOrder(1)} className='cursor-pointer'>
                            · 낮은 가격순
                        </div>
                        <div id="order2" onClick={() => changeOrder(2)} className='cursor-pointer'>
                            · 높은 가격순
                        </div>
                        <div id="order3" onClick={() => changeOrder(3)} className='cursor-pointer'>
                            · 리뷰 많은순
                        </div>
                        <div id="order4" onClick={() => changeOrder(4)} className='cursor-pointer'>
                            · 리뷰 좋은순
                        </div>
                        <div id="order5" onClick={() => changeOrder(5)} className='cursor-pointer'>
                            · 등록일순
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        {testProductArr.map((e, i) => (
                            <div key={i}>
                                <SearchProductItem 
                                    img={e.img}
                                    link={e.link + "/" + e.id}
                                    name={e.name}
                                    price={e.price}
                                    delivery={e.delivery}
                                    seller={e.seller}
                                    reviewCount={e.reviewCount}
                                    sellCount={e.sellCount}
                                    createdAt={e.createdAt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <TopButton />
        </>
    )
}
export default ProductSearch